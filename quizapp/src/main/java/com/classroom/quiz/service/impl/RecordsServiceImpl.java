package com.classroom.quiz.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.classroom.quiz.model.exam.AttemptedQuizRecords;
import com.classroom.quiz.model.exam.Quiz;
import com.classroom.quiz.repository.RecordsRepositiry;
import com.classroom.quiz.service.RecordsService;

@Service
public class RecordsServiceImpl implements RecordsService {
	
	@Autowired
	private RecordsRepositiry recordsRepositiry;

	@Override
	public AttemptedQuizRecords addRecord(AttemptedQuizRecords record) {
		return this.recordsRepositiry.save(record);
	}

	@Override
	public AttemptedQuizRecords updateRecord(AttemptedQuizRecords record) {
		return this.recordsRepositiry.save(record);
	}

	@Override
	public Set<AttemptedQuizRecords> getRecords() {
		return new HashSet<AttemptedQuizRecords>(this.recordsRepositiry.findAll());
	}

	@Override
	public AttemptedQuizRecords getRecord(Long recordId) {
		return this.recordsRepositiry.findById(recordId).get();
	}

	@Override
	public void deleteRecord(Long recordId) {
		this.recordsRepositiry.deleteById(recordId);
	}

	@Override
	public Set<AttemptedQuizRecords> getRecordsOfUser(String username) {
		return new HashSet<AttemptedQuizRecords>(this.recordsRepositiry.getRecordByUsername(username));
	}

	@Override
	public Set<AttemptedQuizRecords> getRecordsOfQuiz(Quiz quiz) {
		return new HashSet<>(this.recordsRepositiry.findByQuiz(quiz));
	}

}