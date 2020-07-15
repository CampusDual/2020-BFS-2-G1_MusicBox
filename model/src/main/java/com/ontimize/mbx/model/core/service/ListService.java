package com.ontimize.mbx.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.mbx.api.core.service.IListService;
import com.ontimize.mbx.model.core.dao.ListDao;
import com.ontimize.mbx.model.core.dao.ListSongDao;

@Service("ListService")
@Lazy
public class ListService implements IListService {
	
	@Autowired private ListDao listDao;
	@Autowired private ListSongDao listSongDao;
	
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	//List
	@Override
	public EntityResult listQuery(Map<String, Object> keyMap, List<String> listList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.listDao, keyMap, listList);
	}

	@Override
	public EntityResult listInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.listDao, attrMap);
	}

	@Override
	public EntityResult listUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.listDao, attrMap, keyMap);
	}

	@Override
	public EntityResult listDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.listDao, keyMap);
	}

	//ListSong
	@Override
	public EntityResult listSongQuery(Map<String, Object> keyMap, List<String> listSongList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.listSongDao, keyMap, listSongList);
	}

	@Override
	public EntityResult listSongInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.listSongDao, attrMap);
	}

	@Override
	public EntityResult listSongUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.listSongDao, attrMap, keyMap);
	}

	@Override
	public EntityResult listSongDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.listSongDao, keyMap);
	}
	
}