package com.classroom.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.classroom.quiz.model.exam.AttemptedQuizRecords;
import com.classroom.quiz.model.exam.Quiz;
import com.classroom.quiz.service.RecordsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user-activities")
public class RecordsController {
	
	@Autowired
	private RecordsService recordsService;
	
	// add record
	@PostMapping("/")
	public ResponseEntity<AttemptedQuizRecords> add(@RequestBody AttemptedQuizRecords record){
		return ResponseEntity.ok(this.recordsService.addRecord(record));	
	}
	
	// update record
	@PutMapping("/")
	public ResponseEntity<AttemptedQuizRecords> update(@RequestBody AttemptedQuizRecords record){
		return ResponseEntity.ok(this.recordsService.updateRecord(record));
	}
	
	// get all records
	@GetMapping("/")
	public ResponseEntity<?> records(){
		return ResponseEntity.ok(this.recordsService.getRecords());	
	}
	
	// get one record
	@GetMapping("/{aId}")
	public AttemptedQuizRecords getRecord(@PathVariable Long aId) {
		return this.recordsService.getRecord(aId);
	}
	
	// delete record
	@DeleteMapping("/{aId}")
	public void delete(@PathVariable Long aId) {
		this.recordsService.deleteRecord(aId);
	}
	
	// get records of quiz
	@GetMapping("/quiz/{qId}")
	public ResponseEntity<?> getRecordsOfQuiz(@PathVariable Long qId){
		Quiz quiz = new Quiz();
		quiz.setqId(qId);
		return ResponseEntity.ok(this.recordsService.getRecordsOfQuiz(quiz));
	}
	
	// get records of user
	@GetMapping("/user/{username}")
	public ResponseEntity<?> getRecordsofUser(@PathVariable String username){
		return ResponseEntity.ok(this.recordsService.getRecordsOfUser(username));
	}
}