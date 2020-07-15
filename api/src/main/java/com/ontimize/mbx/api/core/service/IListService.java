package com.ontimize.mbx.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IListService {
	
	//List
	public EntityResult listQuery(Map<String, Object> keyMap, List<String> listList) throws OntimizeJEERuntimeException;
	public EntityResult listInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult listUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult listDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	//ListSong
	public EntityResult listSongQuery(Map<String, Object> keyMap, List<String> listSongList) throws OntimizeJEERuntimeException;
	public EntityResult listSongInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult listSongUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult listSongDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
