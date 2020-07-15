package com.ontimize.mbx.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ListDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "id_list";
	public static final String ATTR_ID_USER = "id_user";
	public static final String ATTR_NAME = "list_name";
	}