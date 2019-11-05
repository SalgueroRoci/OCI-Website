var body = '';
var pages = ''; 
function img_popup() {
    $(".img-modal img").on("click", function() {
        var img = this.src;
        $("#img-main").attr('src', img);
        // document.getElementById("img-main").src = img;
    });
}
$("#create_compartments").on('click', function(){
    $(".modal-title").html("Create a Compartment");
    var pages = `<li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial we will guide you how to create a compartment. A compartment is a logical container within your tenancy (account) used to seperate OCI resources since every resource belongs to only one compartment. </br> <small><em>Tip:</em> Use compartments to organize and isolate your cloud resources. Some examples: by Project, by Organization, by Use, and/or By User.</br> Policies also grant permission to access specific resources inside specific compartments.</small>
    </div>
    <div class="carousel-item">
    Click the <strong>menu button</strong> on top left. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/menu.png"/></a>
    </div>
    <div class="carousel-item">
    With the side menu open. Scroll down to <strong>"Identity"</strong> and click <strong>"Compartments"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idcompartment.png"/></a> </br> <small><em>Tip:</em> Recommended not to create resources in the <strong>root</strong> compartment</small>
    </div>
    <div class="carousel-item">
    In OCI you can create nested compartments. Root compartment is the default. </br>For now we are going to create a compartment under <strong>Root Compartment</strong>. Click the blue <strong>"Create Compartment"</strong> button on top. </br> <small><em>Tip:</em> You can create subcompartments inside of compartments to create hierarchies that are six levels deep.</small>
    </div>
    <div class="carousel-item">
    Enter the following required areas: </br> <strong>"Name"</strong> and <strong>"Description"</strong>. </br>Please input your information accordingly. <small><em>Tip:</em> <strong>TAGS</strong> are for managing resources and track use, you can learn about them in Governance/Tag topic.</small></br> 
    </div>
    <div class="carousel-item">
    Click <strong>"Create Compartment"</strong> button and you will have your first sub compartment under root compartment.</br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idnested.png"/></a>
    </div>
    <div class="carousel-item">
    You are ready to create resources in your new compartment. Remember to choose your compartment before creating resources.</br><small><em>Tip:</em> For more information about compartments visit the documentation <a href='https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm' target='_blank'>here</a>.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#users_and_groups").on('click', function(){
    $(".modal-title").html("Create a Users, and Groups");
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
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial we will guide you on how to create users and groups. As well as adding users to groups. </br> A user must belong to a group in order to have policies that state which access to services they have. </br>The permissions given to a group is called a policy which we'll discuss later. <small><em>Tip:</em> Only users with user creation policies can create users.</small>
    </div>
    <div class="carousel-item">
    Click the <strong>menu button</strong> on top left.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/menu.png"/></a>
    </div>
    <div class="carousel-item">
    With the side menu open. Scroll down to <strong>"Identity"</strong> and click <strong>"Users"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/iduser.png"/></a>
    </div>
    <div class="carousel-item">
    Click <strong>"Create User"</strong> button. Enter the Name of the user, a brief description, and an email for password recovery. </br>Click <strong>"Create button."</strong>
    </div>
    <div class="carousel-item">
    Now a user has been created! Next we will create a group. </br> <small><em>Tip:</em> A user won't have access to resources until they are added to groups with policies specifying proper permissions.</small> 
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Identity"</strong> and click <strong>"Groups"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idgroups.png"/></a>
    </div>
    <div class="carousel-item">
    Click Create Group button. Enter the <strong>"Name"</strong> and <strong>"Description"</strong> of the group. Click <strong>Submit.</strong> <small><em>Tip:</em> You can create groups by business organization or roles such as admin vs read only users.</small> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idgroups2.png"/></a>
    </div>
    <div class="carousel-item">
    Once a group is created, users should be added. Click on the new created group name. </br>Click <strong>"AddUser to Group"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idaddusers.png"/></a> 
    </div>
    <div class="carousel-item">
    On the list add the users to this specific group. All users within the same group will have the same privileges depending on the policy given to the group. </br> Congratulations created first group in OCI! </br> <small><em>Tip:</em> Users require one-time passwords in order to access console and work with compartments. For this tutorial see User Credentials.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#user_credentials").on('click', function(){
    $(".modal-title").html("User Credentials");
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
    In order for new users to have access to the console they must have the temporary password for their first sign in. </br> In this tutorial we'll show how to give new user temporary password. <small><em>Tip:</em> Can also be used to reset user passwords. Keep in mind OCI users and IDCS users are seperate unless Federated.</small>
    </div>
    <div class="carousel-item">
    When the user signs in to the Console the first time, they'll be immediately prompted to change the password. If the user waits more than 7 days to initially sign in and change the password, it will expire and an administrator will need to create a new one-time password for the user. <small><em>Tip:</em> This only works for non-Federated users. Non-IDCS users sign in through <a href="https://console.us-phoenix-1.oraclecloud.com/" target="_blank">Infrastructure Console</a> instead of using cloud.oracle.com. </small>
    </div>
    <div class="carousel-item">
    With the side menu open. Scroll down to <strong>"Identity"</strong> and click <strong>"Users"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/iduser.png"/></a>
    </div>
    <div class="carousel-item">
    Click the user you wish to change the temporary password or reset password. <strong>"Click Create/Reset Password button"</strong>. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idpassword.png"/></a>
    </div>
    <div class="carousel-item">
    The popup menu will show the new temporary password. Safely give the password to the user.
    </div>
    <div class="carousel-item">
    Now they are able to sign in and will be prompted to change the password. If in the future they need to reset the password, you can redo all these steps!
    </div>
    <div class="carousel-item">
    Users who are not federated with IDCS have to sign in through the OCI console. Common OCI console url: <a href="https://console.us-phoenix-1.oraclecloud.com/" target='_blank'>OCI console sign in page</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#grant_policies").on('click', function(){
    $(".modal-title").html("Grant Policies to Groups");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial we will guide you how to apply policies to groups.</br> A policy specifies who can have access which OCI resource that your company has, and how.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Identity"</strong> and click <strong>"Policies"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idpolicies.png"/></a> 
    </div>
    <div class="carousel-item">
    Click <strong>"Create Policy"</strong>. Add a <strong>"Name"</strong> and a <strong>"Description"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idcreatepolicy.png"/></a><small><em>Tip:</em>You can choose to have the policy expire or stay current. Next we will actually add our policies.</small>
    </div>
    <div class="carousel-item">
    Each statement follows this basic syntax: </br> <code>Allow group <group_name> to <verb> <resource-type> in compartment <compartment_name></code></br>Some cases you may want to apply to a tenancy, heres an example: <code>Allow group <group_name> to <verb> <resource-type> in tenancy</code> <small><em>Tip:</em> Policies only allow access, they cannot deny it. </small> </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idstatements.png "/></a>
    </div>
    <div class="carousel-item">
    For this tutorial add the common admin policy: <code>Allow group <group_name> to manage All Resources in compartment <compartment_name></code> </br>Replacing 'group_name' and 'compartment_name' with the previous created.</br><small><em>Tip:</em> Here are common policies you may encounter and use. <a href="https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/commonpolicies.htm">Click here.</a></small>
    </div>
    <div class="carousel-item">
    Congratulations, current group users now have access to recourses specified!
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#federation").on('click', function(){
    $(".modal-title").html("User Credentials");
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
    In this overview we will guide you how OCI can Federate with Identity Providers. Federation with supported IdP (Identity Providers) can use existing user accounts when logging onto OCI instead of creating a new user. </br><small><em>Tip:</em> OCI supports federation with Oracle Identity Cloud Service, and Microsoft Active Directory, Okta, and any identity provider that supports the Security Assertion Markup Language (SAML) 2.0 protocol.</small>
    </div>
    <div class="carousel-item">
    First set up a relationship between the IdP and Oracle Cloud Infrastructure (known as federation trust). After sets up, any person in your company who goes to sign on is prompted with a single sign-on experience provided by the IdP. </br>The user signs in with the login/password that they've already set up with the IdP. The IdP authenticates the user, and then that user can access Oracle Cloud Infrastructure. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/federation_signin.png"/></a>
    </div>
    <div class="carousel-item">
    As part of setting up the relationship with the IdP, your administrator can map each IdP group to a defined IAM group. So your company can re-use the IdP group definitions when authorizing user access to OCI resources. </br>Here's a screenshot from the mapping process: </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/federation_group_mappings.png"/></a>
    </div>
    <div class="carousel-item">
    Oracle Identity and Access Management (IDCS) should be default federated with your OCI account. So we'll show you how the current IDCS groups are mapped with the IAM OCI groups. </br> Click on the menu and scroll to <strong>"Identity"</strong> and <strong>"Federation."</strong> </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/federation_menu.png"/></a>
    </div>
    <div class="carousel-item">
    Here should show a list of the IdP federated with OCI. IDCS should be one option by default. Click on the IdP name. </br> This page allows you to edit description, add a IDCS users,add IDCS groups, and see mapped groups. Click on Groups Mapping. </br> <small><em>Tip:</em> To edit IDCS settings it requires the Client ID and Client Secret. Should be saved if configured before.</small>
    </div>
    <div class="carousel-item">
    If you click on edit mapping you can edit which groups in OCI are mapped to which groups in IDCS. For now we won't edit anything. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/federation_group_mappings.png"/></a>
    </div>
    <div class="carousel-item">
    If you wish to learn more about Federated groups and users click <a href='https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/federation.htm' target='_blank'>here.</a> Current documentation will help on how to set up Federation for different Identity Providers.
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

// =========
$("#manage_tags").on('click', function(){
    $(".modal-title").html("Managing Tags and Tag Namespaces");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial we will guide you on how to tag resources. </br>When you have many resources across multiple compartments in your tenancy, it can become difficult to track resources. You can then use the tags to help you organize and list resources based on your business needs.
    </div>
    <div class="carousel-item">
    There are two types of tagging. <strong>Free-form</strong> tags, and <strong>Defined</strong> tags. For this tutorial we will create a Defined Tag. <small><em>Tip:</em> More information about the differences <a href="https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/taggingoverview.htm?Highlight=tags">here</a></small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Governance"</strong> and click <strong>"Tag Namespaces"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idtagging.png"/></a> 
    </div>
    <div class="carousel-item">
    Click Create Namespace Definition. Choose the compartment, namespace definition name, and description. Click Submit. <small><em>Tip:</em> A Tag Namespace is like a container for your tag keys. Consists of a name, and zero or more tag key definitions.</small> </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idnamespace.png"/></a>
    </div>
    <div class="carousel-item">
    Click the new namespace link. Inside the tagging namespace you can add your tag keys. </br> <strong>"Click Create Tag Key Definition"</strong>. Add a tag key and a definition then click create tag key button. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idtagkey.png"/></a> 
    </div>
    <div class="carousel-item">
    You created a defined tag namespace. Now you are able to add tags to resources! </br> You can add tags when creating resources or after by clicking the Apply Tag(s) button. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idtagsbtn.png"/></a> </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/idtagapply.png"/></a> </br> <small><em>Tip:</em> Add tags while going through the following tutorials.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});
// ====
$("#create_vcn").on('click', function(){
    $(".modal-title").html("Creating a VCNs");
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
    In this tutorial we will guide you on how to create a Virtual Cloud Network (VCN) for all your Computes, Databases, and other resources. </br><small><em>Tip:</em> Use Create VCN and related resources to quickly get you started. Choosing related resources creates three public subnets, internet gateway, and sets up IG route rule. In this tutorial we shall make the <strong>Virtual Cloud Network Only.</strong></small></br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcneasy.png"/></a> </br> 
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnmenu.png"/></a> 
    </div>
    <div class="carousel-item">
    Click <strong>"Create Virtual Cloud Network"</strong>. Choose the compartment you want the VCN in. Apply a Name. <small><em>Tip:</em> Make sure you create the VCN in another compartment other than root.</small>
    </div>
    <div class="carousel-item">
    Since we have specific network configuration choose <strong>"CREATE VIRTUAL CLOUD NETWORK ONLY"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnonly.png"/></a>
    </div>
    <div class="carousel-item">
    Under CIDR Block apply the proper contiguous IPv4 CIDR block for the VCN.</br></br>Oracle recommends using one of the private IP address ranges specified in RFC 1918 (10.0.0.0/8, 172.16/12, and 192.168/16). However, you can use a publicly routable range. Also, OCI has a range of /16 and /30 for the network. <small><em>Tip:</em> If you plan to peer this VCN with another VCN, the VCNs must not have overlapping CIDRs. Also network size <strong>cannot</strong> be changed after created.</small>
    </div>
    <div class="carousel-item">
    Check 'Use DNS hostnames in his VCN'. </br>Leave DNS Label default and click \"Create Virtual Cloud Network\" button. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcncustom.png"/></a> <small><em>Tip:</em> The default resources created are route table, security list, and DHCP options. Other resources like Internet Gateway and Subnets must be created manually. </br> This offers more customizations such as creating a private only subnets. Refer to the other tutorials to create each resource.</small> <small><em>Tip2:</em> 'Use DNS hostnames' is rewuired if using Database PaaS services.</small>
    </div>
    <div class="carousel-item">
    Your Virtual Cloud Network is provisioned! Use the other tutorials to create additional resources within the VCN. <small><em>Tip:</em> Keep in mind you can create more Route Tables and Security List than the default and apply them to different subnets.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#create_security_lists").on('click', function(){
    $(".modal-title").html("Creating a VCNs");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    `; 
    body = `
    <div class="carousel-item active">
    A security list is a virtual firewall rules for your VCN (outside of the instance firewall rules). Helps to specify which traffic is allowed in and out of your VCNs. </br></br>VCNs are created with one default security lists, and more can be created to manage different security list for each subnet. </br> In this tutorial we will show you how to create a Security List.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnmenu.png"/></a>
    </div>
    <div class="carousel-item">
    Choose the VCN you wish to add security list to. Under Resources, Click Security Lists, then Create Security List. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnseclist.png"/></a> 
    </div>
    <div class="carousel-item">
    Choose the compartment for the Security List and Apply a name. Here allows you to add all the Ingress and Egress rules for the security list. </br> <small><em>Tip:</em> Ingress rules are traffic incomming to your Oracle VCN, and Egress rules are managing traffic outgoing your VCNs. </br> For more information on Ingress vs Egress and Stateless vs Stateful go to <a href='https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/securitylists.htm?Highlight=egress' target='_blank'>here.</a></small>  
    </div>
    <div class="carousel-item">
    Create the Security List. Now, when you create a subnet you can choose the custom Security Lists in the drop down menu instead of the default.
    </div>
    <div class="carousel-item">
    To add security rules to the new security list click on the name. You can choose whether to add Ingress or Egress rules. Lets allow HTTP traffic into our VCN. </br><small><em>Tip:</em> Ingress rules are security rules that check inbound traffic to your VCN. </br> Egress rules check any outbound traffic from your VCN.</small>
    </div>
    <div class="carousel-item">
    We'll add an Ingress rule to allow port 80 from any source IP. Click on Add Ingress rule. </br> Source Type choose CIDR. Source CIDR: 0.0.0.0/0. IP Protocol: TCP. Source Port Range: ALL. Destination Port Range: 80. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcningress.png"/></a>
    </div>
    <div class="carousel-item">
    Now we set up security list properly! Add your proper Ingress and Egress rules for your VCN.
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#create_route_table").on('click', function(){
    $(".modal-title").html("Creating Route Table");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    Virtual Route tables for your VCN help with routing traffic from subnet to destination outside VCN using gateways or specially configured instances. </br></br>VCNs are created with one default route table, and more can be created to manage different routes for each subnet. </br> In this tutorial we will show you how to create a Route Table.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnmenu.png"/></a>
    </div>
    <div class="carousel-item">
    Choose the VCN you wish to add route table to. Under Resources, Click Route Table, then Create Route Table. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnroutetable.png"/></a> 
    </div>
    <div class="carousel-item">
    Choose the compartment for the Route Table and Apply a Name. Here you can add the route rules or add them later by clicking <strong>"+Additional Route Rule"</strong> </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcncreateRT.png"/></a>
    </div>
    <div class="carousel-item">
    Create the Route Table. Now, when you create a subnet you can choose the custom Route Table in the drop down menu instead of the default.
    </div>
    <div class="carousel-item">
    For mor information about routing in OCI click <a href="https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm" target='_blank'> here</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#create_subnet").on('click', function(){
    $(".modal-title").html("Creating a Subnet");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    Subnets are subdivisions of a VCN. </br> Just like VCNs, each subnet must be a continuous range. Subnets contain virtual network interface cards which attach to instances. Can be AD specific or regional and should not overlap with other subnets in the VCN. <small><em>Tip:</em> Subnets can be private or public. private subnets do not allow public IPs on vNICs in the subnet. Public subnets will allow public IP on the vNIC but can be optional.</small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnmenu.png"/></a>
    </div>
    <div class="carousel-item">
    Choose the VCN you wish to add subnets. Under Resources, Click Subnets, then Create Subnet. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnsubnet.png"/></a>
    </div>
    <div class="carousel-item">
    Give a name to the subnet. For subnet type can choose between AD specific or Regional (across ADs). Choose a continuous CIDR block that is within the greater VCN. Choose the Route table for the subnet, default route table is available. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnpart1.png"/></a>
    </div>
    <div class="carousel-item">
    Choose whether you want a public or private subnet. </br>Leave DNS Resolution checked. DHCP options can be kept default. If you created a custom Security List choose that, otherwise choose the default Security Lists. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnpart2.png"/></a> 
    </div>
    <div class="carousel-item">
    Create your new subnet! </br> <small><em>Tip:</em> Only public subnets will allow instances to have public IPs.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#internet_gateway").on('click', function(){
    $(".modal-title").html("Creating Internet Gateway");
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
    In order to let your instances have internet access an Internet Gateway or a NAT gateway must be created. In this tutorial we will show you how to create a Internet Gateway.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Virtual Cloud Networks"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnmenu.png"/></a>
    </div>
    <div class="carousel-item">
    Choose the VCN you wish to add subnets. Under Resources, Click Internet Gateway, then Create Internet Gateway. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnig.png"/></a>
    </div>
    <div class="carousel-item">
    Give a name for the Internet Gateway, and choose the compartment. Click Create Internet Gateway. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnig2.png"/></a>
    </div>
    <div class="carousel-item">
    In order to use an Internet Gateway you must add it to your Route Table. Under Resources, Click Route Table. Click the route table name. <small><em>Tip:</em> The default route table is created on initial VCN creation.</small>
    </div>
    <div class="carousel-item">
    Click Edit Route Rules. Under Target Type choose Internet Gateway. For destination CIDR block give 0.0.0.0/0, then choose your IG from before under Target Internet Gateway. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnigcreation.png"/></a>
    </div>
    <div class="carousel-item">
    Now your resources will have access to the internet and you can SSH and connect to your compute instances! <small><em>Tip:</em> Make sure you have your security list configured to allow communication between instance and public internet. Suggest allowing Egress Rule Destination CIDR 0.0.0.0/0 and All protocols so instances can communicate out of the VCN. Allow Ingress Rules as needed. Be cautious to Allow All Protocols in Ingress rules!!.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#reserved_ip").on('click', function(){
    $(".modal-title").html("Creating Reserved IP");
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
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial we'll show how to create a reserved public IP. Prerequisites required are a compute instance 
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Networking"</strong> and click <strong>"Public IPs"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnpublicipmenu.png"/></a> 
    </div>
    <div class="carousel-item">
    Click <strong>"Create Reserved IP"</strong> and apply a name and choose the right compartment. Click Create Reserved Public IP. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcncreateIP.png"/></a>
    </div>
    <div class="carousel-item">
    Assign the reserved public IP to your compute instance. Click the menu button on top left. Scroll down to <strong>"Compute"</strong> and click <strong>"Instances"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/computemenu.png"/></a>
    </div>
    <div class="carousel-item">
    Click on the Instance Name you wish to add reserved public IP. Under <strong>"Resources"</strong> click on <strong>"Attached VNICs"</strong>.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnattachedvnicip.png"/></a>
    </div>
    <div class="carousel-item">
    One VNIC should be attached when the compute instance was created. Click on the VNIC name. Under <strong>"Resources"</strong> click <strong>"IP Addresses"</strong>.</br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnipaddresses.png"/></a>
    </div>
    <div class="carousel-item">
    In order to assign a reserved public IP you have to unassign the existing Public IP. Click on the menu on the public IP and click edit. Choose <strong>"No Public IP"</strong> to unassign the current public IP. Click on Update. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnunassignip.png"/></a>
    </div>
    <div class="carousel-item">
    Now we are able to assign the public IP. Click on edit again on IP, and choose <strong>"Reserved Public IP"</strong></br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnassignip.png"/></a>
    </div>
    <div class="carousel-item">
    Congrats! The instance should now have your reserved public IP. You can test it by SSH into the instance with the new IP!
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

// ====
$("#create_compute").on('click', function(){
    $(".modal-title").html("Creating a Compute Instance");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial will go over steps on creating a compute instance. We will create a Linux VM, but you can change the image to any. <small><strong>Note:</strong> A VCN, and compartment must already be created.</small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Compute"</strong> and click <strong>"Instances"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/computemenu.png"/></a>
    </div>
    <div class="carousel-item">
    Click Create Instance. Choose a name. For high availability there are 3 Availability Domains per *region. Under "Operating System" choose your image. For this tutorial we will choose the default Oracle Linux 7.<small><em>Tip:</em> Some regions only have one Availability Domain.</small>
    </div>
    <div class="carousel-item">
    Choose Virtual Machines. To determine OCPU number and RAM GB size, OCI uses shapes for the different configurations of both. Choose any available or depending on workload. </br><small><em>Tip:</em> Bare Metal is required if you don't need virtualization.</br> Oracle CPU is equivalent to one physical core.</small>
    </div>
    <div class="carousel-item">
    Add your public key in order to SSH into your instance. To learn how to create an SSH key pair on <a target='_blank' href='https://docs.cloud.oracle.com/iaas/Content/GSG/Tasks/creatingkeys.htm'>Mac/Linux</a> or <a target='_blank' href='https://www.cloudinsidr.com/content/how-to-create-openssh-keys-on-a-windows-desktop-for-remote-access-to-a-linux-server/'> Windows</a>. </br>Under Networking choose the VCN you created before and the subnet. Skip Advanced Settings for now. </br></br> Click Create to create your first compute instance. </br><small><em>Tips:</em> For Mac/Linux you can easily copy your keys using "pbcopy < ~/.ssh/id_rsa.pub" command. </small>
    </div>
    <div class="carousel-item">
    Click on create compute. </br> Congratulation, you created your first compute. For more information on computes go to the <a href='https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm' target='_blank'>documentation</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#create_oraclecompute").on('click', function(){
    $(".modal-title").html("Creating a Oracle Compute Image");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    `; 
    body = `
    <div class="carousel-item active">
    After learning about creating compute instances there is one type where you can use Oracle Images from marketplace that is integrated within the console. You can create Oracle Images such as Oracle DB or Oracle Enterprise Manager etc. <small><strong>Note:</strong> A VCN, and compartment must already be created.</small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Compute"</strong> and click <strong>"Instances"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/computemenu.png"/></a>
    </div>
    <div class="carousel-item">
    Click Create Instance. Choose a name. Choose a Availability Domain. Choose one where a subnet is available (AD or regional subnet). Under "Operating System" click the Oracle Images. You can choose from Pre-built Oracle enterprise images and solutions for OCI. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customeoracle.png"/></a><small><em>Tip:</em> You can also choose the Partner Images tab to use third-party images from Oracle partners.</small> 
    </div>
    <div class="carousel-item">
    For now we'll create an Oracle Database on Compute (not PaaS). Choose Oracle Database, click on the arrow to choose the image version. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customeoracledb.png"/></a>
    </div>
    <div class="carousel-item">
    Select Virtual Machine and choose an available instance shape. Paste or drag your public key. Choose the right VCN and subnet. Click Create Instance. <small><em>Tips:</em> For Mac/Linux you can easily copy your keys using "pbcopy < ~/.ssh/id_rsa.pub" command. </small>
    </div>
    <div class="carousel-item">
    Congratulation, you created your Oracle DB using Oracle Marketplace Image. For more information on computes go to the <a href='https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm' target='_blank'>documentation</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#create_customcompute").on('click', function(){
    $(".modal-title").html("Creating a Custom Compute");
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
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial will go over steps on creating a custom compute instance. If you need a custom OS be imported to OCI you can create a custom image. <small><strong>Note:</strong> A VCN, and compartment must already be created. Know how to create a compute image.</small>
    </div>
    <div class="carousel-item">
    First your virtual image has to be imported to OCI. Import the image to Object Storage using the console or APIs. Click the menu button on top left. Scroll down to <strong>"Object Storage"</strong>. </br> Create a Bucket if one has not been created. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objstoragecreate.png"/></a>
    </div>
    <div class="carousel-item">
    Upload your image to your new bucket. Click on <strong>"Objects"</strong> and <strong>"Upload Objects"</strong>. Upload your image. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objstoragecreate2.png"/></a> </br> <small><em>Tip:</em> For linux images should be VMDK or QCOW2 file formats. More info <a href='https://docs.cloud.oracle.com/iaas/Content/Compute/References/bringyourownimage.htm' target='_blank'>here</a> </small>
    </div>
    <div class="carousel-item">
    Save your URI for the object to create a custom image. Click on the options for the object then click on <strong>"View Object Details"</strong>. Save the URI/URL path on a notepad for later. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objstoragecreate3.png"/></a> </br> <small><em>Tip:</em> For custom images across regions use Pre-Authenticated Request URI instead. Go to Object Storage -> Pre-Authenticated Request tutorial for more info.</small>
    </div>
    <div class="carousel-item">
    Next you'll create a custom image which will allow you to create compute images to deploy. Click on the menu on the top left and go to Compute and Custom Images </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customcompute1.png"/></a>
    </div>
    <div class="carousel-item">
    Click on Import Image. Apply a Name, Operating System, and the URI from the previous step. Based on the type of image choose the Image Type and Launch Mode. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customcompute2.png"/></a> </br> <small><em>Tip:</em> More info on configuration go <a href='https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/imageimportexport.htm#ImportinganImage' target='_blank'>here</a> </small>
    </div>
    <div class="carousel-item">
    Next we'll deploy a compute using the custom image. Go to Compute and Create Instance. Click on <strong>"Change Image Source"</strong>. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customcompute3.png"/></a> </br> <small><em>Tip:</em> You can also choose to create a compute from the custom compute menu after it is created. </small>
    </div>
    <div class="carousel-item">
    Click on custom images tab and you should see your custom image from the previous step. Fill out the rest and deploy your compute image. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/customcompute4.png"/></a> </br> <small><em>Tip:</em> You can create multiple compute virtual machines using the same image.</small>
    </div>
    <div class="carousel-item">
    Congratulation, you imported your custom image onto OCI. For more information on custom computes go to the <a href='https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/managingcustomimages.htm' target='_blank'>documentation</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

// ====
$("#create_blockvolume").on('click', function(){
    $(".modal-title").html("Creating a Block Volume");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    `; 
    body = `
    <div class="carousel-item active">
    Compute instances have their operating systems saved on a boot volume. If you require more storage, creating and attaching block volumes would add more storage to a compute instance.
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Block Storage"</strong> and click <strong>"Block Volumes"</strong>.
    </div>
    <div class="carousel-item">
    Click Create Block Volumes. Choose a Name, and compartment. Choose the AD. Choose the size you wish then create the block volume. Create block volume. <small><em>Tip:</em> Block Volumes must be in the same AD as the compute instance it will be attached to, so choose the correct AD. </br></br> Block Volumes also provide policy based backups <a href='https://docs.cloud.oracle.com/iaas/Content/Block/Tasks/schedulingvolumebackups.htm' target='_blank'>more information here.</a></small>
    </div>
    <div class="carousel-item">
    Block volumes must be attached to a compute instance. Click the menu button on top left. Scroll down to <strong>"Compute"</strong> and click <strong>"Instances"</strong>. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/computemenu.png"/></a>
    </div>
    <div class="carousel-item">
    Click on the name of the instance you want to attach the block volume. Click Attached Block Volume, and click Attach Block Volume button. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvattach.png"/></a>
    </div>
    <div class="carousel-item">
    Choose iSCSI or Paravirtualized. Choose a compartment. Under Block Volume choose the BV you just created. Choose the access type, read only or read & write. Then click create. <small><em>Tip:</em> For more infromation on Block Volumes, visit <a href='https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/overview.htm?Highlight=block%20volumes'>here</a>.</small> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvattach2.png"/></a>
    </div>
    <div class="carousel-item">
    Finally if you chose iSCSI mode to attach, you have to run the iSCSI commands within the instance you attached it to. Open the three dotted menu to copy the iSCSI commands. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bviscsi.png"/></a>
    </div>
    <div class="carousel-item">
    SSH into your instance and paste/run those iSCSI commands. Finally you have your block volume attached to your instance! </br> If you run <code>sudo fdisk -l</code> you can view the attached storage as a new storage device. <small><em>Tip:</em> Make sure to properly format and mount it like you would any storage drive! Use popular format tools like parted.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#manage_blockvolume").on('click', function(){
    $(".modal-title").html("Backup and Clone a Block Volume");
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
    `; 
    body = `
    <div class="carousel-item active">
    Block Volumes allow you to create backups and clones to help manage your storage better. Use Backup to create point in time backup of your data on a block volume. Requires you to restore the backup to use them at a later time. </br> You can choose between manual backup or policy based. <small><em>Note:</em> Backups are encrypted and stored in Oracle Object Storage. </small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Block Storage"</strong> and click <strong>"Block Volumes"</strong>.
    </div>
    <div class="carousel-item">
    Here will list the block volumes created previously. Click on the block volume you wish to backup. </br> Click on <strong>"Block Volume Backups"</strong> then Create Block Volume Backup. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup.png"/></a>
    </div>
    <div class="carousel-item">
    Give the backup a user friendly name. For backup type you can choose between full backup or incremental backups. </br> Click on <strong>"Create Block Volume Backup"</strong> to finish creating a backup. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup2.png"/></a>
    </div>
    <div class="carousel-item">
    You can also assign a policy for backups which will backup block volumes at different frequency and retention period. Monthly, Weekly, and Daily (Bronze, Silver, Gold). </br> Go back to <strong>"Block Volumes"</strong> and select the menu for the specific block volume. </br><small><em>Tip:</em> For more infromation on Policy Based Backups, visit <a href='https://docs.cloud.oracle.com/iaas/Content/Block/Tasks/schedulingvolumebackups.htm'>here</a>.</small> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup3.png"/></a>
    </div>
    <div class="carousel-item">
    Click on Assign Backup Policy. Here you can choose on the policy you want. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup4.png"/></a>
    </div>
    <div class="carousel-item">
    Finally you can also create clones for Block Volumes. </br><small><em>Tip:</em> For more infromation on Clone vs Backups go <a href='https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumebackups.htm#DifferencesBetweenBlockVolumeBackupsandClones'>here</a>.</small>
    </div>
    <div class="carousel-item">
    To clone a block volume click on the block volume you wish to clone. Choose Block Volume Clone then click on Create Clone. Enter the details you wish for the Clone Volume. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup5.png"/></a> </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/bvbackup6.png"/></a>
    </div>
    <div class="carousel-item">
    Congrats! You completed hoe to create a backup and clone of a block volume. This should help with managing your block volumes on OCI!
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

// ====
$("#create_objstr").on('click', function(){
    $(".modal-title").html("Creating a Object Storage");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    `; 
    body = `
    <div class="carousel-item active">
    Another type of storage for OCI is object storage which offers both "hot" (frequently accessed) storage, and "cold" (archive) storage. </br> Object storage is ideal for having a bucket of data. For this tutorial we will go through how to create object storage. <small><em>Tip:</em> A namespace is top level container for buckers and objects and must be unique. Buckets are a logical container that hold objects.</small>
    </div>
    <div class="carousel-item">
    Click the menu button on top left. Scroll down to <strong>"Object Storage"</strong> and click <strong>"Object Storage"</strong>. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objmenu.png"/></a> <small><em>Tip:</em> Archive tier is mostly only for uploading objects.</br> Object Storage also has life cycle policies.</small>
    </div>
    <div class="carousel-item">
    Click Create Bucket button. When the menu pops up it requires the bucket name, and storage type. Choose either standard or archive. <small><em>Tip:</em> Bucket names must be unique within a tenancy.</small>
    </div>
    <div class="carousel-item">
    Click Create Bucket. Now you are able to upload and download objects from the bucket uses. </br>You can use the console, Rest APIs, OCI CLI, and SDK tools. Continue the tutorial to learn how to upload using the console.
    </div>
    <div class="carousel-item">
    Click the bucket name you created. Make sure you choose Objects under Resources. Click on Upload Object. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objupload1.png"/></a>
    </div>
    <div class="carousel-item">
    A new window will allow you to upload new files by dragging and dropping or click browse to choose from your computer. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objupload2.png"/></a>
    </div>
    <div class="carousel-item">
    Congratulations now you have objects on the object storage! </br>You are able to access them depending on the access to the object storage. For easy access you can set the visibility to public. </br> <small><em>Tip:</em> More information on visibility and Pre-Auth requests <a href='https://docs.cloud.oracle.com/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm'>here</a>.</small>
    </div>
    <div class="carousel-item">
    To download objects, click on the three dots on the object will have a menu. In the menu choose <strong>"Download"</strong> if you wish to re-download the file onto your local computer. </br><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/objdownload.png"/></a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

//===
$("#create_filestorage").on('click', function(){
    $(".modal-title").html("Creating a File Storage");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    `; 
    body = `
    <div class="carousel-item active">
    In this tutorial will go over steps on creating a File System Storage and having a compute instance use it. </br> We require you to have a VCN with a public subnet, and internet gateway already created. As well as have a compute instance you are able to ssh into created. </br> Please have the following already: <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filestart.png"/></a>
    </div>
    <div class="carousel-item">
    First we'll create an File Storage System. Click the menu button on top left. Scroll down to <strong>"File Storage"</strong> and click <strong>"File Systems"</strong>. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filemenu.png"/></a>
    </div>
    <div class="carousel-item">
    Click Create File System. Click on Edit Details to give it a memorable name. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filecreate1.png"/></a> </br>Under <strong>Mount Target Information</strong> edit information and give a mount target name. Select the VCN you want to use for the File System. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filecreate2.png"/></a><small><em>Tip:</em> File Systems can connect to any compute in the VCN regardless of AD located.</small>
    </div>
    <div class="carousel-item">
    File Systems require certain protocols and ports to be open. So in your security lists add the following TCP ports 2048-2050, 111, and UDP 2048, 111 for your VCN (example 10.0.0.0/16). <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filevcnsl1.png"/></a><a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filevcnsl2.png"/></a>
    </div>
    <div class="carousel-item">
    On Oracle Console you can find the mount targets for your File System. Click on your file system then click on the Export Path created. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filemount1.png"/></a> Click on Mount Commands and you'll use these to mount on your compute instance. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filemount2.png"/></a> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/filemount3.png"/></a>
    </div>
    <div class="carousel-item">
    Next ssh into your instance you wish to mount the file system to. Example for Oracle Linux: <code>sudo yum install nfs-utils</br>sudo mkdir -p /mnt/TestFS</br>sudo mount 10.x.x.x:/TestFS /mnt/TestFS</code>
    </div>
    <div class="carousel-item">
    Congrats! You can now use your your file system storage. To see if it worked just use the command <code> df -h </code> to list our all the Filesystem and Mount points.
    </div>
    <div class="carousel-item">
    For more documentation on File Storage <a target='_blank' href='https://docs.cloud.oracle.com/iaas/Content/File/Concepts/filestorageoverview.htm'>click here.</a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

// ====
$("#create_nat_gateway").on('click', function(){
    $(".modal-title").html("Creating a NAT Gateway");
    var pages = `
    <li data-target="#carouseltutorials" data-slide-to="0" class="active"></li>
    <li data-target="#carouseltutorials" data-slide-to="1"></li>
    <li data-target="#carouseltutorials" data-slide-to="2"></li>
    <li data-target="#carouseltutorials" data-slide-to="3"></li>
    <li data-target="#carouseltutorials" data-slide-to="4"></li>
    <li data-target="#carouseltutorials" data-slide-to="5"></li>
    <li data-target="#carouseltutorials" data-slide-to="6"></li>
    <li data-target="#carouseltutorials" data-slide-to="7"></li>
    `; 
    body = `
    <div class="carousel-item active">
    You can add a Network Address Translation (NAT) to your VCN. NAT gateway gives cloud resources without public IP addresses to access the internet without exposing resources to incoming connections.</br></br>In this tutorial we'll showcase how to create a NAT gateway.
    </div>
    <div class="carousel-item">
    You should have a VCN already created with a default route table and default security list. Created a public subnet, private subnet, and internet gateway. Refer to previous tutorials on how to create those resources. Should look like this diagram: </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/network_nat_gateway1.png"/></a>
    </div>
    <div class="carousel-item">
    Provision two linux compute instances in the seperate subnets one in the private subnet and one in public subnet. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/network_nat_gateway2.png"/></a>
    </div>
    <div class="carousel-item">
    Next we'll create a NAT gateway so your private compute instance can communicate with the internet. Click on the VCN name and under resources click on NAT gateway. Click on Create NAT gateway. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/network_nat_gateway3.png"/></a></br></br> Apply a name for the gateway and click create. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/network_nat_gateway4.png"/></a>
    </div>
    <div class="carousel-item">
    You have to add the following route rule for you VCN to use the NAT gateway. Go to your route table and Add Route Rule. Add the following: <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/network_nat_gateway5.png"/></a>
    </div>
    <div class="carousel-item">
    In order to test the instance has internet connection through NAT gateway you must SSH into the instance and test a network functionality. </br> You're going to ssh into the public instance then the private instance. <strong>You must have the private key on the public instance in order to ssh from public to private instance</strong> </br> Tranfer the private key to the public instance using scp. Using Linux/Mac: <code>scp [private_key] opc@[public_ip]:/home/opc/.ssh</code> </code> </br> Then SSH into your public instance using your public IP. Linux/Mac: <code>ssh -i [private ssh key path] opc@[public ip] </code>
    </div>
    <div class="carousel-item">
    Now SSH into your private instance using the private ssh key on the public instance. <code> ssh -i [private key] opc@[private_ip]</code> You should be in the private instance on the private subnet.
    </div>
    <div class="carousel-item">
    Lastly test the internet connection using ping google.com, traceroute, or an update on the machine such as 'sudo yum update' for Oracle Linux. </br> Congratulations, you created and used a NAT gateway.
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});

$("#creating_local_peering").on('click', function(){
    $(".modal-title").html("Creating a Local Peering");
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
    <li data-target="#carouseltutorials" data-slide-to="10"></li>
    `; 
    body = `
    <div class="carousel-item active">
    You can extend your VCN by connecting two VCNs in the same region together to communicate with Private IP addresses without routing traffic ovver the internet. Can be in the same or different Oracle Tenancy. <small><em>Tip:</em> To peer VCN require non-overlapping CIDRs in the same region. For peering within different regions you should use Regional Peering.</small>
    </div>
    <div class="carousel-item">
    In the following tutorial we'll create the following architecture to peer two local VCNs. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerarch.png"/></a>
    </div>
    <div class="carousel-item">
    We'll create the first VCN. Create a VCN with the CIDR block of 192.168.0.0/16. </br>Keep the default <strong>Route Table</strong> and <strong>Security List.</strong> </br> Next create a <strong>Public Subnet</strong> with the CIDR 192.168.0.0/24. </br> Create an <strong>Internet Gateway</strong> and add the following route rule to the VCN (change the internet gateway target with yours) <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/vcnigcreation.png"/></a>
    </div>
    <div class="carousel-item">
    In order for two local VCN to communicate with eachother we require a Local Peering Gateway. </br></br>Choose the VCN we just created, under resources click on Local Peering Gateways. </br> Click Create Local Peering Gateway and give it a friendly name. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerLPG.png"/></a>
    </div>
    <div class="carousel-item">
    Next we'll create the second VCN. Choose VCN only, apply the following CIDR block: 10.0.0.0/16. Use the default <strong>Route Table</strong> and <strong>Security List.</strong>. </br> Create a <strong>Private Subnet</strong> with CIDR 10.0.0.0/24. Since we have a private subnet we won't create an internet gateway for this VCN.
    </div>
    <div class="carousel-item">
    The second VCN also needs a LPG so create one using a unique name. You'll notice the peering status is shown as "Not Connected". </br> To establish the connection click on the three dot menu icons and Establish Peering Connection. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeernotconn.png"/></a> </br> You can browse for the LPG of VCN1 under the right compartment and VCN <strong>OR</strong> use the OCID from the LPG of the other VCN you wish to connect to. You require the OCID if the LPG is on a different tenancy. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerocid.png"/></a> 
    </div>
    <div class="carousel-item">
    Now both LPGs should be peered and the Peering Status should change to <strong>"Peered - Connected to a peer".</strong> </br> Still both VCNs won't be able to communicate with each other without updating the route rules and security lists. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeered.png"/></a>
    </div>
    <div class="carousel-item">
    For the first VCN (192.168.0.0/16) in the route table add the following rule. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerrt1.png"/></a> </br> For security lists edit security rules and add the following for Ingress Rules allow all protocols from the second VCN only. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeersl1.png"/></a>
    </div>
    <div class="carousel-item">
    For the second VCN (10.0.0.0/16) in the route table add the following rule. <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerrt2.png"/></a> For security lists edit security rules and add the following for Ingress Rules allow all protocols from the second VCN only. </br> <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeersl2.png"/></a> Add the same rule to Egress as well.
    </div>
    <div class="carousel-item">
    Now both VCNs should be peered and able to connect. In order to test though <strong>create a compute instance</strong> on each VCN and subnet and SSH into the public instance, then ping or ssh into the private instance.
    </div>
    <div class="carousel-item">
    You should end up with the following architecture. Congrats you peered two VCNs! <a class="img-modal" type="button" data-toggle="modal" data-target="#imagess"><img class="img-inner" src="images/tutorials/localpeerarch.png"/></a>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});




