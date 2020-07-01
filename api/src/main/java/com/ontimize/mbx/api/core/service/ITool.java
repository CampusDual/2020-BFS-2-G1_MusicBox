package com.ontimize.mbx.api.core.service;

import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ITool {
	
	public BasicExpression searchObjectByLikeName(String attrName, String object_name);

}
