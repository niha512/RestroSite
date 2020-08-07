package com.site.restro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserDetails {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public int hashCode() {
        return username.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if(obj == null){
            return false;
        }
        if(this == obj){
            return true;
        }
        if(obj instanceof UserDetails && ((UserDetails) obj).getUsername().equalsIgnoreCase(this.username)){
            return true;
        }else {
            return false;
        }
    }
    @Override
    public String toString() {
        return "UserDetails{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
