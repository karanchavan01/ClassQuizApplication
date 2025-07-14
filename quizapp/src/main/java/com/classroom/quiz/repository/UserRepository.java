package com.classroom.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User getUserByUsername(String username);
}
