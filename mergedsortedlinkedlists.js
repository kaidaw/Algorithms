function mergeTwoLists(l1,l2){
    if (!l1&&!l2){
        return null
    }
    let returnNode = null
    let one = l1
    let two = l2
    let blank = {val:null,next:null}
    while (true){
        debugger
        if (!returnNode){
            if (one&&!two){
                return one
            }
            if (two&&!one){
                return two
            }
            if (one.val<=two.val){
                blank.next={val:null,next:null}
                blank.val=one.val
                returnNode=blank
                blank=blank.next
                one=one.next?one.next:null
                continue
            }
            else{
                blank.next={val:null,next:null}
                blank.val=two.val
                returnNode=blank
                blank=blank.next
                two=two.next?two.next:null
                continue
            }
        }
        if (!one&&!two){
            return returnNode
        }
        if (!one){
            blank.val=two.val
            blank.next=two.next?{val:null,next:null}:null
            blank=blank.next
            two=two.next?two.next:null 
            continue
        }
        if (!two){
            blank.val=one.val
            blank.next=one.next?{val:null,next:null}:null
            blank=blank.next
            one=one.next?one.next:null
            continue
        }
        if (one.val<=two.val){
            blank.val=one.val
            blank.next={val:null,next:null}
            blank=blank.next
            one=one.next?one.next:null  
        }
        else{
            blank.val=two.val
            blank.next={val:null,next:null}
            blank=blank.next
            two=two.next?two.next:null   
        }
    }
    return returnNode
}
