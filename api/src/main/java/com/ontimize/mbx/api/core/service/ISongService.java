package com.ontimize.mbx.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISongService {
	
	//Song
	public EntityResult songQuery(Map<String, Object> keyMap, List<String> songList) throws OntimizeJEERuntimeException;
	public EntityResult songInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult songUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult songDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	//DiscSong
	public EntityResult discSongQuery(Map<String, Object> keyMap, List<String> discSongList) throws OntimizeJEERuntimeException;
	public EntityResult discSongInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult discSongUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult discSongDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
