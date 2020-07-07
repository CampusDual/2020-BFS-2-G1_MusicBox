package com.ontimize.mbx.model.core.service;

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

	@Autowired
	private SongDao songDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult songQuery(Map<String, Object> keyMap, List<String> songList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.songDao, keyMap, songList);
	}
	
}