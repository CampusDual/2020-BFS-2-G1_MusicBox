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
import com.ontimize.jee.server.rest.ORestController;
import com.ontimize.mbx.api.core.service.ISongService;
import com.ontimize.mbx.api.core.service.ITool;
import com.ontimize.mbx.model.core.dao.SongDao;

 

@RestController
@RequestMapping("/songs")
@ComponentScan(basePackageClasses = { com.ontimize.mbx.api.core.service.ISongService.class,
                                      com.ontimize.mbx.api.core.service.ITool.class })
public class SongRestController extends ORestController<ISongService> {

 

    @Autowired
    private ISongService songSrv;

 

    @Autowired
    private ITool toolSrv;

 

    @Override()
    public ISongService getService() {
        return this.songSrv;
    }

 

    @RequestMapping(value = "/songSearch", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResult resultSearchLikeByName(@RequestBody Map<String, Object> req) {
        try {
            List<String> columns = (List<String>) req.get("columns");
            Map<String, Object> filter = (Map<String, Object>) req.get("filter");
            String song_name = (String) filter.get("search_name");
            Map<String, Object> key = new HashMap<String, Object>();
            key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
                    toolSrv.searchObjectByLikeName(SongDao.ATTR_NAME, song_name));
            return songSrv.songQuery(key, columns);
        } catch (Exception e) {
            e.printStackTrace();
            EntityResult res = new EntityResult();
            res.setCode(EntityResult.OPERATION_WRONG);
            return res;
        }
    }
}