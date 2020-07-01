package com.ontimize.mbx.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IArtistService {

	public EntityResult artistQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
//	public EntityResult artistInsert(Map<String, Object> attrMap);
//	public EntityResult artistUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
//	public EntityResult artistDelete(Map<String, Object> keyMap);
}
