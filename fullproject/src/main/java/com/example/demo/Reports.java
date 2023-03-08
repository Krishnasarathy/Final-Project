package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Reports {
	@Id
	private int id;
	private String Name;
	private String suffers;
	private int roomno;
	
	public Reports(int id,String Name,String suffers,int roomno) {
		super();
		this.id=id;
		this.Name=Name;
		this.suffers=suffers;
		this.roomno=roomno;
	}

	public Reports() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getSuffers() {
		return suffers;
	}

	public void setSuffers(String suffers) {
		this.suffers = suffers;
	}

	public int getRoomno() {
		return roomno;
	}

	public void setRoomno(int roomno) {
		this.roomno = roomno;
	}
	
}
