package com.ontimize.mbx.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("DiscDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/DiscDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class DiscDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "id_disc";
	public static final String ATTR_ID_ARTIST = "id_artist";
	public static final String ATTR_NAME = "disc_name";
	public static final String ATTR_PRODUCER = "producer";
}
