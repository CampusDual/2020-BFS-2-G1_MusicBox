package com.ontimize.mbx.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISongService {
	
	public EntityResult songQuery(Map<String, Object> keyMap, List<String> songList) throws OntimizeJEERuntimeException;
	
}
