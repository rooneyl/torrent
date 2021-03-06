package com.randomdev.torex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.randomdev.torex.repository")
@SpringBootApplication
public class ToRexApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToRexApplication.class, args);
	}
}
