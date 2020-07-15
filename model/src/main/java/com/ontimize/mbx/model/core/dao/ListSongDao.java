package com.ontimize.mbx.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ListSongDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListSongDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListSongDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "id_list_song";
	public static final String ATTR_LIST = "id_list";
	public static final String ATTR_SONG = "id_song";
	}