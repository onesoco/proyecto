<?php
class Product
{
    // database connection and table name
    private $conn;
    private $table_name = "products";

    // object properties
    public $id;
    public $name;
    public $title;
    public $description;
    public $active;
    public $destacado;
    public $created;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Todos los productos.
    function read()
    {
        // Query
        $query = "SELECT  
        id, name, title, description, active, destacado, created 
        FROM " . $this->table_name . " ORDER BY id DESC";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // Crear producto.
    function create()
    {
        // Query para insertar un producto
        $query = "INSERT INTO " . $this->table_name . " SET
            name=:name, title=:title, description=:description, 
            active=:active, destacado=:destacado, created=:created";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->active = htmlspecialchars(strip_tags($this->active));
        $this->destacado = htmlspecialchars(strip_tags($this->destacado));
        $this->created = htmlspecialchars(strip_tags($this->created));

        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":active", $this->active);
        $stmt->bindParam(":destacado", $this->destacado);
        $stmt->bindParam(":created", $this->created);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Muestra el producto con la id x.
    function readOne()
    {
        // Query para mostrar solo un producto.
        $query = "SELECT id, name, title, description, active, destacado
            FROM " . $this->table_name . " WHERE id = ? ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        if (empty($row)) {
            $this->name = '';
            $this->title = '';
        } else {
            $this->name = $row['name'];
            $this->title = $row['title'];
            $this->description = $row['description'];
            $this->active = $row['active'];
            $this->destacado = $row['destacado'];
        }
    }

    // Update de un producto.
    function update()
    {
        // Query
        $query = "UPDATE " . $this->table_name . " SET
                name = :name,
                title = :title,
                description = :description,
                active = :active,
                destacado = :destacado
                WHERE id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->active = htmlspecialchars(strip_tags($this->active));
        $this->destacado = htmlspecialchars(strip_tags($this->destacado));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind new values
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':active', $this->active);
        $stmt->bindParam(':destacado', $this->destacado);
        $stmt->bindParam(':id', $this->id);

        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // delete the product
    function delete()
    {
        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind id of record to delete
        $stmt->bindParam(1, $this->id);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // search products
function search($keywords){
  
    // select all query
    $query = "SELECT id, name, title, description, active, destacado FROM
                " . $this->table_name . "
            WHERE
            name LIKE ? OR title LIKE ? OR description LIKE ?
            ORDER BY created DESC";
  
    // prepare query statement
    $stmt = $this->conn->prepare($query);
  
    // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords = "%{$keywords}%";
  
    // bind
    $stmt->bindParam(1, $keywords);
    $stmt->bindParam(2, $keywords);
    $stmt->bindParam(3, $keywords);
  
    // execute query
    $stmt->execute();
  
    return $stmt;
}

// read products with pagination
public function readPaging($from_record_num, $records_per_page){
  
    // select query
    $query = "SELECT id, name, title, description, active, destacado
            FROM " . $this->table_name . "
            ORDER BY created DESC LIMIT ?, ?";
  
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
  
    // bind variable values
    $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
    $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
  
    // execute query
    $stmt->execute();
  
    // return values from database
    return $stmt;
}

// read products with pagination
public function readPagingActive($from_record_num, $records_per_page){
  
    // select query
    $query = "SELECT id, name, title, description, active, destacado
            FROM " . $this->table_name . " WHERE active = 1
            ORDER BY created DESC LIMIT ?, ?";
  
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
  
    // bind variable values
    $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
    $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
  
    // execute query
    $stmt->execute();
  
    // return values from database
    return $stmt;
}

// used for paging products
public function count(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
  
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
  
    return $row['total_rows'];
}

// used for paging products
public function countActive(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . " WHERE active = 1";
  
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
  
    return $row['total_rows'];
}

}