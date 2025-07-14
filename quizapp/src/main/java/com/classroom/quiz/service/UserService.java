package com.classroom.quiz.service;

import java.util.Set;

import com.classroom.quiz.model.User;
import com.classroom.quiz.model.UserRole;

public interface UserService {
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	public User getUser(String username);
	public void deleteUser(Long userId);
	public Set<User> getUsers();
	public User updateUser(Long id, User user) throws Exception;
	
}