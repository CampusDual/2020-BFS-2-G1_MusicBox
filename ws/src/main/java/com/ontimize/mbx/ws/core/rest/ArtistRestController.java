package com.ontimize.mbx.ws.core.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.db.SQLStatementBuilder;
import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.db.SQLStatementBuilder.BasicField;
import com.ontimize.db.SQLStatementBuilder.BasicOperator;
import com.ontimize.jee.server.rest.BasicExpressionProcessor;
import com.ontimize.jee.server.rest.ORestController;
import com.ontimize.mbx.api.core.service.IArtistService;
import com.ontimize.mbx.model.core.dao.ArtistDao;
import com.ontimize.mbx.model.core.service.ArtistService;

@RestController
@RequestMapping("/artists")
@ComponentScan(basePackageClasses = { com.ontimize.mbx.api.core.service.IArtistService.class })
public class ArtistRestController extends ORestController<IArtistService> {
	@Autowired
	private IArtistService artistSrv;

	@Override
	public IArtistService getService() {
		return this.artistSrv;
	}

	@RequestMapping(value = "/artistsSearch", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult aaa(@RequestBody Map<String, Object> req) {
		try {
			List<String> columns = (List<String>) req.get("columns");
			Map<String, Object> filter = (Map<String, Object>) req.get("filter");
			String artist_name = (String) filter.get("artist_name");
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
					searchLikeArtistName(ArtistDao.ATTR_NAME, artist_name));
			return artistSrv.artistQuery(key, columns);
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
		}
	}
	
	private BasicExpression searchLikeArtistName(String attrName, String artist_name) {
		
		BasicField field = new BasicField(attrName);
		String[] data = artist_name.trim().split("\\s+");
		int dataLength = data.length;
		BasicExpression one = null;
		BasicExpression two = null;
		BasicExpression total = null;
		BasicExpression increment = null;
		BasicExpression create = null;

		switch (dataLength) {

		case 1:
			total = new BasicExpression(field, BasicOperator.LIKE_OP, "%" + data[0] + "%");
			break;

		default:
			one = new BasicExpression(field, BasicOperator.LIKE_OP, "%" + data[0] + "%");
			two = new BasicExpression(field, BasicOperator.LIKE_OP, "%" + data[1] + "%");
			for (int i = 1; i < dataLength ; i++) {	
				total = increment;
				if (dataLength == 2) {
					increment = new BasicExpression(one, BasicOperator.OR_OP, two);
					total = increment;
				} else {
					if(i == 2) {
						create = new BasicExpression(field, BasicOperator.LIKE_OP, "%" + data[i] + "%");
						increment = new BasicExpression(two, BasicOperator.OR_OP, create);
						total = new BasicExpression(one, BasicOperator.OR_OP, increment);
						
					}else {
						create = new BasicExpression(field, BasicOperator.LIKE_OP, "%" + data[i] + "%");
						increment = new BasicExpression(total, BasicOperator.OR_OP, create);
						total = increment;
					}
				}
			}
			break;
		}
		return total;
	}


}
