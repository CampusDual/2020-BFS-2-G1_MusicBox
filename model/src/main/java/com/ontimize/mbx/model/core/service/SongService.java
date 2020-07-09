package com.ontimize.mbx.model.core.service;

import com.ontimize.mbx.model.core.dao.DiscSongDao;
import com.ontimize.mbx.model.core.dao.SongDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.mbx.api.core.service.ISongService;


@Service("SongService")
@Lazy
public class SongService implements ISongService {

	@Autowired private SongDao songDao;
	@Autowired private DiscSongDao discSongDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	// Song
	@Override
	public EntityResult songQuery(Map<String, Object> keyMap, List<String> songList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.songDao, keyMap, songList);
	}

	@Override
	public EntityResult songInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.songDao, attrMap);
	}

	@Override
	public EntityResult songUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.update(this.songDao, attrMap, keyMap);
	}

	@Override
	public EntityResult songDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.delete(this.songDao, keyMap);
	}

	// DiscSong
	@Override
	public EntityResult discSongQuery(Map<String, Object> keyMap, List<String> discSongList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.discSongDao, keyMap, discSongList);
	}

	@Override
	public EntityResult discSongInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.insert(this.discSongDao, attrMap);
	}

	@Override
	public EntityResult discSongUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		  return this.daoHelper.update(this.discSongDao, attrMap, keyMap);
	}

	@Override
	public EntityResult discSongDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.delete(this.discSongDao, keyMap);
	}
	
}