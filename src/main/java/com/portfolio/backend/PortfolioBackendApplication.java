package com.portfolio.backend;

import com.portfolio.backend.entity.Contact;
import com.portfolio.backend.repository.ContactRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class PortfolioBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioBackendApplication.class, args);
    }

    // CommandLineRunner to test the database connection and interaction
    @Bean
    public CommandLineRunner testDatabase(ContactRepository repository) {
        return args -> {
            // Create a new Contact and save it to the database
            Contact contact = new Contact();
            contact.setName("John Doe");
            contact.setEmail("john.doe@example.com");

            // Save the contact to the database
            repository.save(contact);

            // Fetch all contacts from the database and print them
            repository.findAll().forEach(System.out::println);
        };
    }
}
