package com.classroom.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.classroom.quiz.model.exam.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	
	public List<Feedback> findFeedbackByUsername(String username);

}
