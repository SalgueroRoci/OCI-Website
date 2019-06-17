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
    You can proceed to next step <a class='next-step' href='/jump_server_load_balancer/vcn.json'>1.1 Create VCN</a></br> <small><em>Tip:</em> Remember to choose the new compartment when you create new resources.</small>
    </div>
    `;
    $(".carousel-indicators").html(pages);
    $(".carousel-inner").html(body);
    img_popup();
});




