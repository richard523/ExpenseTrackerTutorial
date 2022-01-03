package com.example.richard.ExpenseApp.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@NoArgsConstructor
@Data
@Table(name="category")
public class Category {
	
	@Id
	private Long id;
	
	@NonNull
	// Travel, grocery , etc (category name)
	private String name;
	
	// connection already made between expense and category and user
//	@ManyToOne(cascade=CascadeType.PERSIST)
//	private User user;a
//	
}
