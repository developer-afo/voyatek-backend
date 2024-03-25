<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Auth extends CI_Controller {

	function __construct() {
			parent::__construct();
			$this->load->model('user_model');
			$this->load->library('form_validation');
	}


	public function register() {
	    
	    
	     if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        // If not a POST request, return an error message
        $this->output->set_content_type('application/json')->set_output(json_encode(['status' => 'error', 'message' => 'Only POST requests are allowed']));
        return;
    }
    
			// Validation rules
			$this->form_validation->set_rules('first_name', 'First Name', 'trim|required|max_length[250]');
			$this->form_validation->set_rules('last_name', 'Last Name', 'trim|required|max_length[250]');
			$this->form_validation->set_rules('username', 'Username', 'trim|required|max_length[250]|is_unique[users.username]');
			$this->form_validation->set_rules('email', 'Email', 'trim|required|max_length[250]|valid_email|is_unique[users.email]');
			$this->form_validation->set_rules('phone_number', 'Phone Number,', 'trim|required|max_length[20]|is_unique[users.phone_number]');
			$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]|max_length[250]');

			if ($this->form_validation->run() == FALSE) {
					// When Validation failed
					$response['status'] = 'error';
					$response['message'] = validation_errors();
			} else {
					// When Validation passed
					$data = array(
							'first_name' => $_POST['first_name'],
							'last_name' => $_POST['last_name'],
							'username' => $_POST['username'],
							'email' => $_POST['email'],
							'phone_number' => $_POST['phone_number'],
							'password' => password_hash($_POST["password"],PASSWORD_DEFAULT)
					);

					$user_id = $this->user_model->register($data);
             if ($user_id) {
                 $response['status'] = 'success';
                 $response['message'] = 'User registered successfully';
             } else {
                 $response['status'] = 'error';
                 $response['message'] = 'Failed to register user';
             }
         }

         // Sending response out in JSON
         $this->output->set_content_type('application/json')->set_output(json_encode($response));
			}


   public function login() {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        // If not a POST request, return an error message
        $this->output->set_content_type('application/json')->set_output(json_encode(['status' => 'error', 'message' => 'Only POST requests are allowed']));
        return;
    }

    // Validation rules
    $this->form_validation->set_rules('identity', 'Email or Username', 'trim|required|max_length[250]');
    $this->form_validation->set_rules('password', 'Password', 'trim|required|max_length[250]');

    if ($this->form_validation->run() == FALSE) {
        // When Validation fails
        $response['status'] = 'error';
        $response['message'] = validation_errors();
    } else {
        // When Validation passed
        $identity = $this->input->post('identity');
        $password = $this->input->post('password');

        // Check if the identity is email or username
        if (filter_var($identity, FILTER_VALIDATE_EMAIL)) {
            // If it's an email, set it as email in data array
            $data['email'] = $identity;
        } else {
            // If it's not an email, consider it as username
            $data['username'] = $identity;
        }

        // Validate input data here
        $user = $this->user_model->login($data, $password);
        if ($user) {
            $response['status'] = 'success';
            $response['user'] = $user;
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Invalid email/username or password';
        }
    }

    // Sending response out in JSON
    $this->output->set_content_type('application/json')->set_output(json_encode($response));
}

     public function forgotPassword() {
         
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            // If not a POST request, return an error message
            $this->output->set_content_type('application/json')->set_output(json_encode(['status' => 'error', 'message' => 'Only POST requests are allowed']));
            return;
        }
    
        // Validation rules
        $this->form_validation->set_rules('identity', 'Email or Username', 'trim|required|max_length[250]');

        if ($this->form_validation->run() == FALSE) {
            // When Validation fails
            $response['status'] = 'error';
            $response['message'] = validation_errors();
        } else {
            // When Validation passed
            $identity = $this->input->post('identity');
            $password = $this->input->post('password');
    
            // Check if the identity is email or username
            if (filter_var($identity, FILTER_VALIDATE_EMAIL)) {
                // If it's an email, set it as email in data array
                $data['email'] = $identity;
            } else {
                // If it's not an email, consider it as username
                $data['username'] = $identity;
            }
    
            // Validate input data here
            $user = $this->user_model->checkUser($data);
            
            if ($user) {
                
            // Generate a random code
            $random_code = substr(md5(uniqid(mt_rand(), true)), 0, 6); 
            
            $this->user_model->storeCode($user['id'],$random_code);
            
            // Send the code via email
            $to_email = $user['email'];
            $subject = "Your Verification Code";
            $message = "Your verification code is: $random_code";
            $headers = "From: admin@afolabisalawu.site\r\n";
            $headers .= "Reply-To: support@afolabisalawu.site\r\n";
            $headers .= "Content-type: text/plain\r\n";
            
             mail($to_email, $subject, $message, $headers);
           
                $response['status'] = 'success';
                $response['message'] = "Verification code has been sent to your email.";
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Invalid email/username';
            }
        }
    
        // Sending response out in JSON
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }



  public function resetPassword() {
         
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            // If not a POST request, return an error message
            $this->output->set_content_type('application/json')->set_output(json_encode(['status' => 'error', 'message' => 'Only POST requests are allowed']));
            return;
        }
    
        // Validation rules
        $this->form_validation->set_rules('identity', 'Email or Username', 'trim|required|max_length[250]');
        $this->form_validation->set_rules('code', 'Code', 'trim|required|max_length[250]');
    $this->form_validation->set_rules('password', 'Password', 'trim|required|max_length[250]');


        if ($this->form_validation->run() == FALSE) {
            // When Validation fails
            $response['status'] = 'error';
            $response['message'] = validation_errors();
        } else {
            // When Validation passed
            $identity = $this->input->post('identity');
            $password = $this->input->post('password');
    
            // Check if the identity is email or username
            if (filter_var($identity, FILTER_VALIDATE_EMAIL)) {
                // If it's an email, set it as email in data array
                $data['email'] = $identity;
            } else {
                // If it's not an email, consider it as username
                $data['username'] = $identity;
            }
    
            // Validate input data here
            $user = $this->user_model->checkUser($data);
            
            if ($user) {
                
            $code = $_POST['code'];
            
                if($code == $user['reset_pass_code']){
                    
                $encrypted_password = password_hash($password,PASSWORD_DEFAULT);
                  $this->user_model->change_password($user['id'],$encrypted_password);

                 $response['status'] = 'success';
                $response['message'] = 'Password Successfully Changed';
                     
                }else{
                   
                   $response['status'] = 'error';
                $response['message'] = 'Invalid verification code';
                
                }
             
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Invalid email/username';
            }
        }
    
        // Sending response out in JSON
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }
    
}
