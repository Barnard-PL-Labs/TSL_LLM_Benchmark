Command failed: tsl synthesize -i tmp.tsl --js
"

Parser Failed! Input was:

	always assume {
	  // Trucks are initially at the terminal and can move towards the bridge
	  (forall truckId : TruckAtTerminal(truckId) -> X TruckAtBridgeStart(truckId) U TruckCrossingBridge(truckId));
	  
	  // A truck at the start of the bridge can only enter if no other truck is on the bridge
	  (forall truckId : TruckAtBridgeStart(truckId) && !exists otherTruckId : TruckCrossingBridge(otherTruckId) -> X TruckEnterBridge(truckId));
	  
	  // When a truck is crossing the bridge, it eventually exits
	  (forall truckId : TruckCrossingBridge(truckId) -> F TruckExitBridge(truckId));
	  
	  // Ensure trucks are dispatched sequentially towards the bridge
	  (forall truckId : DispatchTruck(truckId) -> (TruckAtTerminal(truckId) W TruckReachedBridgeStart(truckId)));
	}
	
	always guarantee {
	  // Ensure no two trucks are on the bridge simultaneously
	  (forall truckId, otherTruckId : TruckCrossingBridge(truckId) && truckId != otherTruckId -> !TruckCrossingBridge(otherTruckId));
	  
	  // Once a truck exits the bridge, it is no longer crossing
	  (forall truckId : TruckExitBridge(truckId) -> !TruckCrossingBridge(truckId));
	}


" (line 3, column 19):
unexpected ":"
expecting float, integer, identifier, "(", operator or ")"
