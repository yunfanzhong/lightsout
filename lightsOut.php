<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<link href="lightsOutStylesheet.css" type="text/css" rel="stylesheet">
	<script src="lightsOutJavascript.js"></script>
	<title>Lights Out</title>
</head>
<body>
<div id="content">
<h1>Lights Out</h1>
<?php
echo "<table>";

for ($i = 1; $i <=5; $i++) {
	echo "<tr>";
	for ($j = 1; $j <=5; $j++) {
		echo "<td class=\"tableOff\"></td>";
	}
	echo "</tr>";
}

echo "</table>";

?>

<h2>Congratulations. You have put all the lights out.</h2>

<br />
<br />

<button id="button" type="button">Reset</button>
</div>
<!-- Solution:
R1 C2; R2 C1, 4; R3 C1, 2, 3, 4, 5; R4 C1, 4; R5 C2 -->
</body>
</html>