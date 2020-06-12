package com.ontimize.mbx.model.core.service;

import org.springframework.stereotype.Service;

import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.db.SQLStatementBuilder.BasicField;
import com.ontimize.db.SQLStatementBuilder.BasicOperator;
import com.ontimize.mbx.api.core.service.ITool;

@Service("ToolService")
public class ToolService implements ITool{

	@Override
	public BasicExpression searchObjectByLikeName(String attrName, String object_name) {

		BasicField field = new BasicField(attrName);
		String[] data = object_name.trim().split("\\s+");
		BasicExpression create = null;
		BasicExpression send = null; 
		BasicExpression acumuled = null;

		for (String d : data) {
			if(send == null) {
				send = new BasicExpression(field, BasicOperator.LIKE_OP, "%"+ d + "%");
			} else {	
				create = new BasicExpression(field, BasicOperator.LIKE_OP, "%"+ d + "%");
				send = new BasicExpression(send, BasicOperator.OR_OP, create);
			}
		}
		return send;
	}
}