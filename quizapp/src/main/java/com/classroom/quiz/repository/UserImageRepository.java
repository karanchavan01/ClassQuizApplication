package com.classroom.quiz.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.classroom.quiz.model.UserImage;

public interface UserImageRepository extends JpaRepository<UserImage, Long> {
	
	Optional<UserImage> findByFilename(String filename);

	Optional<UserImage> findByUser(String user);
}
