package com.classroom.quiz;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClassroomQuizApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ClassroomQuizApplication.class, args);
	}

//	@Autowired
//	private UserService userService;
//
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Project Started...");

//		User user = new User();
//		user.setFirstName("Karan");
//		user.setLastName("Chavan");
//		user.setUsername("karanchavan410");
//		user.setPhone("9975311930");
//		user.setPassword(this.bCryptPasswordEncoder.encode("abc123"));
//		user.setEmail("karanchavan2321@gmail.com");
//		user.setProfile("default.png");

//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println("Created User: " + user1.getUsername());
		
	}
}