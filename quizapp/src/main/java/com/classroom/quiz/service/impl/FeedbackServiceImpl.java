package com.classroom.quiz.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.classroom.quiz.model.exam.Feedback;
import com.classroom.quiz.repository.FeedbackRepository;
import com.classroom.quiz.service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepository;

	@Override
	public Feedback addFeedback(Feedback feedback) {
		return this.feedbackRepository.save(feedback);
	}

	@Override
	public Feedback updateFeedback(Feedback feedback) {
		return this.feedbackRepository.save(feedback);
	}

	@Override
	public Feedback getFeedback(Long fid) {
		return this.feedbackRepository.findById(fid).get();
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		return this.feedbackRepository.findAll();
	}

	@Override
	public List<Feedback> getFeedbackOfUser(String username) {
		return this.feedbackRepository.findFeedbackByUsername(username);
	}

	@Override
	public void deleteFeedback(Long fid) {
		this.feedbackRepository.deleteById(fid);
	}

}
