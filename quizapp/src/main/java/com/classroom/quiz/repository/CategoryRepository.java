package com.classroom.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.exam.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
