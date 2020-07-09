package com.ontimize.mbx.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("DiscSongDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/DiscSongDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class DiscSongDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "id_disc_song";
	public static final String ATTR_ID_SONG = "id_song";
	public static final String ATTR_ID_DISC = "id_disc";
	public static final String ATTR_ALL = "default";
}