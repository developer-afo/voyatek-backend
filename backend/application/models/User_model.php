<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function register($data) {
        // Insert user data into the database
        $this->db->insert('users', $data);
        return $this->db->insert_id();
    }

    
    
    public function login($data, $password) {
        // Check if the data contains email or username
        if (isset($data['email'])) {
            // If email is provided, search by email
            $query = $this->db->get_where('users', ['email' => $data['email']]);
        } else {
            // If username is provided, search by username
            $query = $this->db->get_where('users', ['username' => $data['username']]);
        }

        // Check if user exists
        if ($query->num_rows() > 0) {
            $user = $query->row_array();

            // Verify password
            if (password_verify($password, $user['password'])) {
                // Password is correct, return user data
                return $user;
            }
            
           
        }

        // Either user doesn't exist or password is incorrect
        return false;
    }
    


  public function checkUser($data) {
        // Check if the data contains email or username
        if (isset($data['email'])) {
            // If email is provided, search by email
            $query = $this->db->get_where('users', ['email' => $data['email']]);
        } else {
            // If username is provided, search by username
            $query = $this->db->get_where('users', ['username' => $data['username']]);
        }

        // Check if user exists
        if ($query->num_rows() > 0) {
            $user = $query->row_array();
            return $user;
        }

        // Either user doesn't exist or password is incorrect
        return false;
    }
    
    
      public function storeCode($user_id,$code) {
         $this->db->query("UPDATE users SET reset_pass_code = '".$code."'WHERE id=".$user_id."");
      }
      
          public function change_password($user_id,$password)
        {
         $this->db->query("UPDATE users SET password = '".$password."'WHERE id=".$user_id."");
        }
    
    
}
