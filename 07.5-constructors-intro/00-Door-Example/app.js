// the old non-constructor way of doing things:
var door = {
  color: 'brown',
  height: '8ft',
  width: '4ft',
  material: 'metal',
  knobType: 'round',
  hasLock: true,
  isLocked: false,
  isOpen: false,
  open: function() {
    this.isOpen = true;
    console.log('Door is open!');
  },
  close: function() {
    this.isOpen = false;
    console.log('Door is closed!');
  },
  lock: function() {
    if (this.hasLock) {
      this.isLocked = true;
      console.log('Door is locked!');
    } else {
      console.log('Door has no lock!');
    }
  },
  unlock: function() {
    if (this.hasLock) {
      this.isLocked = false;
      console.log('Door is unlocked!');
    } else {
      console.log('Door has no lock!');
    }
  },
  usePeephole: function() {
    console.log('is anyone there?');
  }
}

console.log(door.color);
console.log(door.isLocked);
door.open();
door.close();
door.lock();
door.unlock();
door.usePeephole();

// the *new* constructor way of doing things:

function Door2(clr, ht, wd, mat, kt, hl, il, io) {
  this.color = clr;
  this.height = ht;
  this.width = wd;
  this.material = mat;
  this.knobType = kt;
  this.hasLock = hl;
  this.isLocked = il;
  this.isOpen = io;
  this.open = function() {
    this.isOpen = true;
    console.log('Door is open!');
  };
  this.close = function() {
    this.isOpen = false;
    console.log('Door is closed!');
  };
  this.lock = function() {
    if (this.hasLock) {
      this.isLocked = true;
      console.log('Door is locked!');
    } else {
      console.log('Door has no lock!');
    }
  };
  this.unlock = function() {
    if (this.hasLock) {
      this.isLocked = false;
      console.log('Door is unlocked!');
    } else {
      console.log('Door has no lock!');
    }
  };
  this.usePeephole = function() {
    console.log('is anyone there?');
  };
}

var door2 = new Door2('blue', '7ft', '3ft', 'wood', false, false, false);

console.log(door2.color);
console.log(door2.isLocked);
door2.open();
door2.close();
door2.lock();
door2.unlock();
door2.usePeephole();

//things to note:
//advanced - you could use an object as a parameter to hold multiple pieces of information

//crazy myDefault function
function myDefault(input, defacto) {
  if (input === undefined) {
    return defacto;
  }
  return input;
}

function Door3(options) {
  this.color = myDefault(options.color, 'blue');//we could use a crazy myDefault function for myDefaults
  this.height = myDefault(options.height, '8ft');
  this.width = myDefault(options.width, '4ft');
  this.material = myDefault(options.material, 'wood');
  this.knobType = myDefault(options.knobType, 'round');
  this.hasLock = myDefault(options.hasLock, false);
  this.isLocked = myDefault(options.isLocked, false);
  this.isOpen = myDefault(options.isOpen, false);
  this.open = function() {
    this.isOpen = true;
    console.log('Door is open!');
  };
  this.close = function() {
    this.isOpen = false;
    console.log('Door is closed!');
  };
  this.lock = function() {
    if (this.hasLock) {
      this.isLocked = true;
      console.log('Door is locked!');
    } else {
      console.log('Door has no lock!');
    }
  };
  this.unlock = function() {
    if (this.hasLock) {
      this.isLocked = false;
      console.log('Door is unlocked!');
    } else {
      console.log('Door has no lock!');
    }
  };
  this.usePeephole = function() {
    console.log('is anyone there?');
  };
}

var door3 = new Door3({hasLock: true, knobType: 'square'});
                                    // we don't need to define everything
                                    // with objects and myDefaults

console.log(door3.color);
console.log(door3.isLocked);
door3.open();
door3.close();
door3.lock();
door3.unlock();
door3.usePeephole();

//things to note:
//advanced - you could use an object constructor in an object constructor
function Knob(type, radius, hasLock, isLocked) {
  this.type = type;
  this.radius = radius;
  this.hasLock = hasLock;
  this.isLocked = isLocked;
  this.turn = function() {
    if (this.hasLock && this.isLocked) {
      console.log('Won\'t turn!');
      return false;
    } else {
      console.log('It turns!');
      return true;
    }
  }
}
function Door4(color, isOpen, knobType, knobRadius, knobHasLock, knobIsLocked) {
  this.color = color;
  this.isOpen = isOpen;
  this.knob = new Knob(knobType, knobRadius, knobHasLock, knobIsLocked);
  this.open = function() {
    if (this.isOpen) {
      console.log('already open!');
    } else {
      console.log('closed, try turning knob.')
      if (this.knob.turn()) {
        this.isOpen = true;
        console.log('door opens!');
      } else {
        console.log('door won\'t open');
      }
    }
  }
}
var door4 = new Door4('blue', false, 'round', '1.5in', true, true);
door4.open();
