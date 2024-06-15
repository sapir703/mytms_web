<?php
include "db_connection.php";

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


    // Upload the photo to the destination path
    if (1==1) {
            echo '<script type="text/javascript">
            window.onload = function () { alert("Customer Created Successfully"); window.location.href = "https://sapirsv.mtacloud.co.il/index.html";} 
            </script>'; 
    }


// Close the database connection
mysqli_close($connection);
?>
