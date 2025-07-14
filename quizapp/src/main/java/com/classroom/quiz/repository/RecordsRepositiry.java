package com.classroom.quiz.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.User;
import com.classroom.quiz.model.exam.AttemptedQuizRecords;
import com.classroom.quiz.model.exam.Quiz;

public interface RecordsRepositiry extends JpaRepository<AttemptedQuizRecords, Long> {

	Set<AttemptedQuizRecords> findByQuiz(Quiz quiz);
	
	Set<AttemptedQuizRecords> getRecordsByUser(User user);
	
	Set<AttemptedQuizRecords> getRecordByUsername(String username);
}
