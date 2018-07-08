<?php
header('Access-Control-Allow-Origin: *', false);
header('Content-Type: application/json;charset=utf-8');
ini_set('max_execution_time', 0);
ini_set('memory_limit', -1);
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

// Server List Info.
$servers = [
	[
	 'host' => '173.212.227.150',
	 'name' => 'Server94',
	 'ports' => [
			['Auth',4422],
			['Game',4423],
			['Patch',3516]
		 ]
	],
	[
	 'host' => '173.212.227.150',
	 'name' => 'Server72',
	 'ports' => [
			['Auth',4420],
			['Game',4421],
			['Patch',3516]
		 ]
	]
];

$data = [];
$index = 0;

	foreach ($servers as $server) {
		
		$subindex = 0;
		$data[$index] = [
			 'name' => $server['name'],	
			 'host' => $server['host']
		];
		
		foreach ($server['ports'] as $port ) {
			
			$connection = @fsockopen($server['host'], $port[1], $errno, $errstr, 2);
			
			if (is_resource($connection)) {
				$data[$index]['ports'][$subindex] = [ 'name' => $port[0], 'number' => $port[1], 'status' => true ];
				fclose($connection);
			}
			else {
				$data[$index]['ports'][$subindex] = [ 'name' => $port[0], 'number' => $port[1], 'status' => false ];
			}
			$subindex++;
		}
		$index++;
	}
 
echo json_encode($data);