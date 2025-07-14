package com.classroom.quiz.service;

import java.util.Set;

import com.classroom.quiz.model.exam.AttemptedQuizRecords;
import com.classroom.quiz.model.exam.Quiz;

public interface RecordsService {
	public AttemptedQuizRecords addRecord(AttemptedQuizRecords record);
	public AttemptedQuizRecords updateRecord(AttemptedQuizRecords record);
	public Set<AttemptedQuizRecords> getRecords();
	public AttemptedQuizRecords getRecord(Long recordId);
	public void deleteRecord(Long recordId);
	public Set<AttemptedQuizRecords> getRecordsOfUser(String username);
	public Set<AttemptedQuizRecords> getRecordsOfQuiz(Quiz quiz);
}