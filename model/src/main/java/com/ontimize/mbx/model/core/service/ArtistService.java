package com.ontimize.mbx.model.core.service;

import com.ontimize.mbx.model.core.dao.ArtistDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.mbx.api.core.service.IArtistService;

@Service("ArtistService")
@Lazy
public class ArtistService implements IArtistService {

	@Autowired
	private ArtistDao artistDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult artistQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.artistDao, keyMap, attrList);
	}

//	@Override
//	public EntityResult artistInsert(Map<?, ?> attrMap) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public EntityResult artistUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public EntityResult artistDelete(Map<?, ?> keyMap) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
