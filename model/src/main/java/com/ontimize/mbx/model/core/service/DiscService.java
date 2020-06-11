package com.ontimize.mbx.model.core.service;

import com.ontimize.mbx.model.core.dao.DiscDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.mbx.api.core.service.IDiscService;


@Service("DiscService")
@Lazy
public class DiscService implements IDiscService {

	@Autowired
	private DiscDao discDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult discQuery(Map<String, Object> keyMap, List<String> discList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.discDao, keyMap, discList);
	}

	
}
