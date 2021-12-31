package com.example.richard.ExpenseApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.richard.ExpenseApp.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Long>{
	// findBy + field
	
	Category findByName(String name);
}
