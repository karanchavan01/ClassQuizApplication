package com.classroom.quiz.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.exam.Question;
import com.classroom.quiz.model.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	Set<Question> findByQuiz(Quiz quiz);

}
