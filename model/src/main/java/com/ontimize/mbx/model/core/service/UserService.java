package com.ontimize.mbx.model.core.service;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.mbx.api.core.service.IUserService;
import com.ontimize.mbx.model.core.dao.UserDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Service("UserService")
@Lazy
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		Map<Object, Object> filter = new HashMap<>();
		filter.put("user_", this.daoHelper.getUser().getUsername());
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(userDao, attrMap);
	}
 
	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		 Map<Object, Object> filter = new HashMap<>();
		 List columns = Arrays.asList("ID_USER"); // Qué id_user usamos??
		 Map user = this.userQuery(filter, columns).getRecordValues(0);
		 filter.put("ID_USER", user.get("ID_USER"));
		 return this.daoHelper.update(userDao, attrMap, filter);
		}

	public EntityResult userDelete(Map<?, ?> keyMap) {
		Map<Object, Object> attrMap = new HashMap<>();
		attrMap.put("user_down_date", new Timestamp(Calendar.getInstance().getTimeInMillis()));
		return this.daoHelper.update(this.userDao, attrMap, keyMap);
	}

}
