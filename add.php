<?php
if(isset($_POST['add']))
{
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

if(! get_magic_quotes_gpc() )
{
   $name = addslashes ($_POST['name']);
   $email = addslashes ($_POST['email']);
   $subject = addslashes($_POST['subject']);
   $comment = addslashes($_POST['comment']);
}
else
{
   $name = $_POST['name'];
   $email = $_POST['email'];
   $subject = $_POST['subject'];
   $comment = $_POST['comment'];
}

$querySQL = "INSERT INTO coba values('$name', '$email', '$subject', '$comment')";
mysql_select_db('tubes');
$retval = mysql_query( $querySQL, $conn );
if(! $retval )
{
  die('Could not enter data: ' . mysql_error());
}
header('Location: bbbb.html');
mysql_close($conn);
}
?>