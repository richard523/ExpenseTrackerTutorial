package com.example.richard.ExpenseApp.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name="expense")
public class Expense {
	@Id
	private Long id;
	
	private Instant expensedate;
	
	private String descript;
	
	// 1000, 6/16/2021, 'Visit Maryland', 1, category id 10
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	private User user;
}
