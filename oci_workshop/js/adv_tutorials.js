var body = '';
var pages = ''; 
function img_popup() {
    $(".img-modal img").on("click", function() {
        var img = this.src;
        $("#img-main").attr('src', img);
        // document.getElementById("img-main").src = img;
    });
}
// ======
$("#jump_server_lb0").on('click', function(){
    $(".modal-title").html("Create a Compartment");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    `; 
    body = `
    <div class="carousel-item active">
    For the Jump Server tutorial we will create multiple resouces and show you how to create this common architecture in OCI. Please refer to the diagram for reference. </br> This first tutorial we'll create a compartment.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jsnotionalarch.png"/></a>
    </div>
    <div class="carousel-item">
    Click the <strong>menu button</strong> on top left. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/menu.png"/></a>
    </div>
    <div class="carousel-item">
    With the side menu open. Scroll down to <strong>"Identity"</strong> and click <strong>"Compartments"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idcompartment.png"/></a>
    </div>
    <div class="carousel-item">
    In OCI you can create nested compartments. Root compartment is the default. </br> For now we are going to create a compartment under <strong>Root Compartment</strong>. Click the blue <strong>"Create Compartment"</strong> button on top. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idcompartment.png"/></a> </br> <small><em>Tip:</em> You can create subcompartments inside of compartments to create hierarchies that are six levels deep.</small>
    </div>
    <div class="carousel-item">
    Enter the following required areas: </br> <strong>"Name"</strong> and <strong>"Description"</strong>. </br>Please input your information accordingly. <small><em>Tip:</em> <strong>TAGS</strong> are for managing purposes use, we will learn about them later.</small> 
    </div>
    <div class="carousel-item">
    Click <strong>"Create Compartment"</strong> button and you will have your first sub compartment under root compartment.</br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idnested.png"/></a>
    </div>
    <div class="carousel-item">
    You can proceed to next step Create VCN <small><em>Tip:</em> Remember to choose the new compartment when you create new resources.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb1").on('click', function(){
    $(".modal-title").html("Create VCN");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>1.1 Create VCN</h4>First, we need to create a VCN as a whole network for all your resources.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/vcn_menu.png"/></a> 
    </div>
    <div class="carousel-item">
    First, name your VCN.</br>Choose the compartment you want the VCN in.</br>Then, choose <strong>"CREATE VIRTUAL CLOUD NETWORK ONLY"</strong> to create only a network.</br>At here we use 10.0.0.0/16 for our CIDR block.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/vcn_config.png"/></a></br>The rest options can be default.
    </div>
    <div class="carousel-item">
    Click <strong>"Create Virtual Cloud Network"</strong> at the bottom of the page and your new VCN will be provisioned.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/vcn_create_button.png"/></a>
    </div>
    <div class="carousel-item">
    You can proceed to step 1.2 Create Internet Gateway and NAT Gateway
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb2").on('click', function(){
    $(".modal-title").html("Internet and NAT Gateway");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>1.2 Create Internet Gateway and NAT Gateway</h4>Theoretically, all your public subnet's Internet traffic should be sent out through a <strong>Internet Gateway</strong>. At this step, we will create a <strong>Internet Gateway</strong> for future usage.
    </div>
    <div class="carousel-item">
    After the creation of the VCN, you should be in the VCN detail page, select <strong>Internet Gateway</strong> on the left.</br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/internet_gw_menu.png"/></a> </br>Within <strong>Internet Gateways</strong> tab, click on <strong>"Create Internet Gateway"</strong>.<br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_internet_gateway_button.png"/></a>
    </div>
    <div class="carousel-item">
    Name your Internet Gateway, the compartment should be the same one with your VCN. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/internet_gateway_config.png"/></a></br>Click on Create Internet Gateway button at the bottom and finish.
    </div>
    <div class="carousel-item">
    Similar to public subnet, all your private subnet's Internet traffic should be sent out through an <strong>NAT Gateway</strong>. At this step, we will create an <strong>NAT Gateway</strong> for future usage.
    </div>
    <div class="carousel-item">
    Same as Internet Gateway, select <strong>NAT Gateway</strong> on the left.</br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/nat_gw_menu.png"/></a></br>Within <strong>NAT Gateways</strong> tab, click on <strong>"Create NAT Gateway"</strong>.<br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_nat_gateway_button.png"/></a>
    </div>
    <div class="carousel-item">
    Name your NAT Gateway, the compartment should be the same one with your VCN. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/nat_gateway_config.png"/></a></br>Click on Create NAT Gateway button at the bottom and finish.
    </div>
    <div class="carousel-item">
    You can now proceed to step 1.3 Create Security Lists and Route Tables
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb3").on('click', function(){
    $(".modal-title").html("Security List and Route Table");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    <li data-target="#carouseltutorials" data-slide-to="8"></li>
    <li data-target="#carouseltutorials" data-slide-to="9"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>1.3 Create Security Lists and Route Tables</h4>Since we are going to have a jump server (public machine), two servers (private machines), and a load balancer (lives in public subnet). We need to create 3 sets of <strong>security lists</strong> and <strong>route tables</strong> for each of their subnet.
    </div>
    <div class="carousel-item">
    Select <strong>Security Lists</strong> on the left in your VCN detail page.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/security_list_menu.png"/></a>
    </div>
    <div class="carousel-item">
    We are going to create 3 security lists for <strong>Jump Server Subnet</strong>, <strong>Backend Server Subnet</strong>, and <strong>Load Balancer Subnet</strong>.</br>Click on <strong>Create Security List</strong>.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_security_list_button.png"/></a>
    </div>
    <div class="carousel-item">
    Let's create the <strong>Jump Server Subnet Security List</strong> first. Let's give it a name <em>jump_server_security_list</em></br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_security_list.png"/></a></br>For a jump server, we want to allow ingress traffic to access port 22 therefore we can SSH to the machine.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_ingress.png"/></a></br>At the same time, to make it easy, we allow all out-bounding traffic for this subnet.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_egress.png"/></a>
    </div>
    <div class="carousel-item">
    Now we can create <strong>Backend Server Subnet Security List</strong> in similar fashion. First, we name it <em>backend_server_security_list</em>. Now let's give this security list a bit different rules.</br>Besides port 22, we now want port 80 for ingress, which allows the <strong>Load Balancer</strong> to access the servers in the future. Also, the source CIDR is limited to 10.0.0.0/16 to only allow internal traffic.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/backend_server_ingress.png"/></a></br>As for the egress rules, we still want all traffic to go out.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_egress.png"/></a>
    </div>
    <div class="carousel-item">
    At the end, let's create <strong>Load Balancer Subnet Security List</strong> with name <em>load_balancer_security_list</em>. It is very similar to <strong>Jump Server Subnet Security List</strong>, but we expose port 80 instead 22.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_ingress.png"/></a></br>As for the egress rules, we still want all traffic to go out.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_egress.png"/></a>
    </div>
    <div class="carousel-item">
    Now you should have security lists similar to the following picture. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/security_lists.png"/></a>
    </div>
    <div class="carousel-item">
    Since we will use 2 <strong>Public Subnets</strong> and 1 <strong>Private Subnet</strong>, we would need 2 <strong>Route Table</strong> to route their traffic to either <strong>Internet Gateway</strong> or <strong>NAT Gateway</strong>. At this step, we will be creating 2 <strong>Route Tables</strong>.
    </div>
    <div class="carousel-item">
    Select <strong>Route Table</strong> tab from the left of VCN detail page.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/route_table_menu.png"/></a></br>Click on the <strong>Create Route Table</strong> button.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_route_table_button.png"/></a>Let's name the first <strong>Route Table</strong> <em>public_subnet_route_table</em>. The target type should be <strong>Internet Gateway</strong>, and all traffic (0.0.0.0/0) should be directed to the <strong>Internet Gateway</strong> we created. The configuration should be like the following picture.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/public_subnet_route_table.png"/></a></br>Similar to the above steps, now we create another route table using the name <em>private_subnet_route_table</em> and send all traffic (0.0.0.0/0) to <strong>NAT Gateway</strong>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/private_subnet_route_table.png"/></a>
    </div>
    <div class="carousel-item">
    Now we can move on to step 1.4 Create Subnets
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb4").on('click', function(){
    $(".modal-title").html("Create Subnets");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>1.4 Create Subnets</h4>Finally, we can create our subnets.
    </div>
    <div class="carousel-item">
    Select <strong>Subnets</strong> on the left in your VCN detail page.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/subnet_menu.png"/></a>
    </div>
    <div class="carousel-item">
    At here we are going to create three <strong>Subnets</strong>, which will accommodate the Jump Server, Backend Servers, and Load Balancer Listener.</br>Click on <strong>Create Subnet</strong>.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_subnet_button.png"/></a>
    </div>
    <div class="carousel-item">
    Let's create <strong>jump_server_subnet</strong> first.</br>Let's assign the CIDR block to <em>10.0.1.0/24</em>. Route table for this subnet is <em>public_subnet_route_table</em> since we want to access the jump server from Internet. This will also be a public subnet for public(Internet) access. Finally, the <strong>Security List</strong> will be <em>jump_server_security_list</em> that we created in the previous steps. We can leave all other fields as default. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_subnet_config_1.png"/></a><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_subnet_config_2.png"/></a>
    </div>
    <div class="carousel-item">
    Next, let's create <strong>backend_server_subnet</strong>.</br>Assign the CIDR block to <em>10.0.2.0/24</em>. Route table for this subnet is <em>private_subnet_route_table</em>. This will be a private subnet, so for <strong>Subnet Access</strong>, select <em>private subnet</em>. Finally, the <strong>Security List</strong> will be <em>backend_server_security_list</em>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/backend_subnet_config_1.png"/></a><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/backend_subnet_config_2.png"/></a>
    </div>
    <div class="carousel-item">
    Last, let's create <strong>load_balancer_subnet</strong> first.</br>Assign the CIDR block to <em>10.0.3.0/24</em>. Route table for this subnet is <em>public_subnet_route_table</em> since we want to access from Internet. This will also be a public subnet. Finally, the <strong>Security List</strong> will be <em>load_balancer_security_list</em>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_subnet_config_1.png"/></a><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_subnet_config_2.png"/></a>
    </div>
    <div class="carousel-item">
    Now, all networking components are created, and we can move on to Step 2.1 Create Jump Server
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb5").on('click', function(){
    $(".modal-title").html("Jump Server");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>2.1 Create Jump Server</h4>There are three instances we are making, a <strong>Jump Server</strong> and two <strong>Backend Servers</strong>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Compute"</strong> and click <strong>"Instances"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/compute_menu.png"/></a> Then, select the <strong>Create Instance</strong> button.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_instance_button.png"/></a>
    </div>
    <div class="carousel-item">
    You will be redirected to the compute instance creation page. First, let's name our server "jump_server".<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_config_1.png"/></a>Next, scroll down and choose or paste your <strong>Public SSH Key</strong>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_config_2.png"/></a>Finally, we put the instance in our <em>jump_server_subnet</em>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jump_server_config_3.png"/></a>Now, let's wait a bit for the server to be created.
    </div>
    <div class="carousel-item">
    At this step, we will SSH into the <strong>Jump Server</strong>. You can find your <strong>Public IP</strong> in the <strong>Primary VNIC Information</strong> section.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/public_ip_address.png"/></a>Now let's open our terminal and SSH into the Jump Server. Run command <code>ssh -i &lt;your private key&gt; opc@&lt;your jump box public ip&gt;</code><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/ssh_into_jump_server.png"/></a>Once we are in the server, we will create <strong>SSH Key Pair</strong> for provisioning the <strong>Backend Servers</strong>. Run <code>ssh-keygen</code> and spam your enter key, we will have ourselves a pair of SSH Keys. Run <code>cat ~/.ssh/id_rsa.pub</code> to get your <strong>Public Key</strong>. Copy your <strong>Public Key</strong> and we will use it to create two <strong>Backend Servers</strong>.
    </div>
    <div class="carousel-item">
    Now you can proceed to step 2.2 Create Backend Server
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb6").on('click', function(){
    $(".modal-title").html("Create Backend Server");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>2.2 Create Backend Server</h4>Just like how we created our first instance. Let's name our server "backend_server_1" and "backend_server_2". Next, scroll down and paste your Jump Server's <strong>Public SSH Key</strong>. Finally, we put both backend servers in our <em>backend_server_subnet</em>.
    </div>
    <div class="carousel-item">
    After both instances are made, we now can SSH into the Backend Servers from our Jump Server. First, let's find the <strong>Private IP</strong> address for both instances. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/private_ip_address.png"/></a> From the <strong>Jump Server</strong> run <code>ssh opc@&lt;private_ip_address_1&gt;</code> and run </br><code>sudo su - root</br>echo y | yum install httpd</br>systemctl start httpd</br>systemctl enable httpd</br>firewall-cmd --zone=public --permanent --add-service=http</br>firewall-cmd --reload</br>echo "server 1" > /var/www/html/index.html</br>systemctl restart httpd.service</code> now disconnect from the backend server and ssh to the second jump server <code>ssh opc@&lt;private_ip_address_2&lt;</code> on the second backend server run </br><code>sudo su - root</br>echo y | yum install httpd</br>systemctl start httpd</br>systemctl enable httpd</br>firewall-cmd --zone=public --permanent --add-service=http</br>firewall-cmd --reload</br>echo "server 2" > /var/www/html/index.html</br>systemctl restart httpd.service</code>
    </div>
    <div class="carousel-item">
    Now, you should have two <strong>Backend Servers</strong> and one <strong>Jump Server</strong>. In order to server the contents we just inserted to the backend servers, we need to create a <strong>Load Balancer</strong>
    </div>
    <div class="carousel-item">
    You can proceed to step 3.1 Create Load Balancer
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#jump_server_lb7").on('click', function(){
    $(".modal-title").html("Create Backend Server");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    `; 
    body = `
    <div class="carousel-item active">
    <h4>3.1 Create Load Balancer</h4>Finally, we can create our <strong>Load Balancer</strong>. Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Load Balancers"</strong>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_menu.png"/></a> Click on <strong>Create Load Balancer</strong> button.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/create_load_balancer_button.png"/></a>
    </div>
    <div class="carousel-item">
    Let's name the <strong>Load Balancer</strong> <em>load_balancer</em> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_config_1.png"/></a>Select our VCN and set the <strong>Load Balancer Listener</strong> in the <em>load_balancer_subnet</em>.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_config_2.png"/></a>Finally, add both of our backend servers into the backend set.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_config_3.png"/></a>Hit the create button and we have our load balancer.
    </div>
    <div class="carousel-item">
    After the <strong>Load Balancer</strong> is fully provisioned, we can find its IP address in the information section.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/load_balancer_public_ip.png"/></a>Copy and paste the IP address in your browser and visit the IP address, you will see the Load Balancer working and switching in between servers.<a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/switch.png"/></a>
    </div>
    <div class="carousel-item">
    Congratulations you completed the Jump Server Tutorial. Youre resources in OCI should look like: </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/jump_server_load_balancer/jsnotionalarch.png"/></a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});
