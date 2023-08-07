<?php
// class for the MVC design pattern
class Controller {
	public $load;
	public $model;
	
	function __construct()
	{
		$this->load = new Load(); 
		$this->model = new Model();
		$this->home();
	}
    // home page function
	function home()
	{
		$data = $this->model->model3D_info();
		$this->load->view('view3DAppTest', $data);
	}
}
?>    