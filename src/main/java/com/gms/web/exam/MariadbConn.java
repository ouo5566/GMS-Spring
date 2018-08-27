package com.gms.web.exam;

import java.sql.*;

public class MariadbConn {
	public String exam() {
		Connection conn;
		Statement stmt;
		String value = "";
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			conn = DriverManager
					.getConnection(
							"jdbc:mariadb://localhost:3306/mariadb"
							, "mariadb"
							, "mariadb");
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(String.format("SELECT MEMBER_ID FROM MEMBER "));
			value = (rs.next()) ? rs.getString("MEMBER_ID") : "ERROR :: NOT FOUND" ;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return value;
	}
}
