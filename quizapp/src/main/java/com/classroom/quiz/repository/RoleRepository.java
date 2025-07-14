package com.classroom.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
