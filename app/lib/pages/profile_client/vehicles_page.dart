import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:provitask_app/components/provitask_bottom_bar.dart';
import 'package:provitask_app/controllers/user/profile_controller.dart';
import 'package:provitask_app/pages/profile_client/UI/profile_client_widgets.dart';

class VehiclesProvider extends GetView<ProfileController> {
  final _widgets = ProfileClientWidgets();

  VehiclesProvider({Key? key}) : super(key: key);

  // ejecuto el metodo getSkills para obtener los skills del usuario

  @override
  Widget build(BuildContext context) {
    return Obx(
      () => Scaffold(
        // paso elñ titulo edit perfil
        appBar: _widgets.profileAppBar(context, ''),
        backgroundColor: Colors.white,
        drawer: _widgets.homeDrawer(),
        bottomNavigationBar: const ProvitaskBottomBar(),
        body: SafeArea(
          child: Center(
            child: Column(
              children: [
                const Text(
                  'Vehicles',
                  style: TextStyle(
                    color: Color(0xff170591),
                    fontSize: 25,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 7),

                // container de color ambar con texto que diga How do you get to your destination?

                Container(
                  width: Get.width * 0.7,
                  height: 30,
                  decoration: BoxDecoration(
                    color: const Color(0xffD67B21),
                    borderRadius: BorderRadius.circular(50),
                  ),
                  child: const Center(
                    child: Text(
                      'How do you get to your destination?',
                      style: TextStyle(
                        color: Color.fromARGB(255, 255, 255, 255),
                        fontSize: 15,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
                ),

                _widgets.formVehicles(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
