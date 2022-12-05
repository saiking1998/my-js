package com;
import com.filenet.api.collection.DocumentSet;
import com.filenet.api.core.Connection;
import com.filenet.api.core.Document;
import com.filenet.api.core.Domain;
import com.filenet.api.core.Factory;
import com.filenet.api.core.Folder;
import com.filenet.api.core.ObjectStore;
import com.filenet.api.util.UserContext;
import java.util.Iterator;
import java.util.HashMap;  
import java.util.Map;  
import java.util.Scanner;

import javax.security.auth.Subject;

public class App {
	private static Connection conn = null;
	 private static UserContext uc =null;
	 private static ObjectStore oStore =null;
     public static Scanner sc= new Scanner(System.in);
    public static void getConn() {
	    try {
            String URI =   "http://172.16.1.97:9080/wsi/FNCEWS40MTOM/";
           
            String userName ="krishna";
            String password = "Welcome@123";
           
            if(conn==null){
            	
            conn = Factory.Connection.getConnection(URI);
            Subject subject = UserContext.createSubject(conn, userName, password, null);
             uc = UserContext.get();
            uc.pushSubject(subject);
            System.out.println("the connection to----->   " +conn.getURI()+"    is established by ---> "+userName);
            }
        

        } catch (Exception e) {
           
            e.printStackTrace();
        }
	}
    public static String  mymeth (String path)  {
        getConn();
        String obj = "sfkhvsfk"; 
        try {
            Domain dom = Factory.Domain.fetchInstance(conn, null, null);
            oStore = Factory.ObjectStore.fetchInstance(dom, "test4", null);
            System.out.println("enter the path of the folder");
            
            Folder fold = Factory.Folder.fetchInstance(oStore, path, null);
            DocumentSet docset = fold.get_ContainedDocuments();
            Iterator itr = docset.iterator();
            int count = 0;
            while(itr.hasNext()){
                count++;
                 Document dd = (Document) itr.next();
                 String docname = dd.get_Name();
                 String docid = (dd.get_Id()).toString();
                 System.out.println(count+"=---"+docname+"     "+ docid);
                 
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return obj;
    }
}
